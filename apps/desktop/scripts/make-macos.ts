import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { packager, type OfficialArch } from '@electron/packager';

import { productName, version } from '../package.json';

const desktopDir = path.resolve(__dirname, '../..');
const outDir = path.join(desktopDir, 'out');
const arch = (process.argv[2] ?? process.arch) as OfficialArch;

const run = (command: string, args: string[]) =>
  execFileSync(command, args, { stdio: 'inherit' });

const makeIcon = (tempDir: string) => {
  const logoPath = require.resolve('@kds/icons/assets/logo.svg');
  const svgPath = path.join(tempDir, 'logo.svg');
  const logo = fs
    .readFileSync(logoPath, 'utf8')
    .replace(/<svg[^>]*>|<\/svg>/g, '');
  const svg = `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
<rect x="64" y="64" width="896" height="896" rx="200" fill="white"/>
<g transform="translate(152 152) scale(30)">${logo}</g>
</svg>`;

  fs.writeFileSync(svgPath, svg);

  const previewDir = path.join(tempDir, 'preview');
  fs.mkdirSync(previewDir);
  run('/usr/bin/qlmanage', ['-t', '-s', '1024', '-o', previewDir, svgPath]);

  const sourcePng = path.join(previewDir, 'logo.svg.png');
  const iconsetDir = path.join(tempDir, `${productName}.iconset`);
  fs.mkdirSync(iconsetDir);

  for (const [name, size] of [
    ['icon_16x16.png', 16],
    ['icon_16x16@2x.png', 32],
    ['icon_32x32.png', 32],
    ['icon_32x32@2x.png', 64],
    ['icon_128x128.png', 128],
    ['icon_128x128@2x.png', 256],
    ['icon_256x256.png', 256],
    ['icon_256x256@2x.png', 512],
    ['icon_512x512.png', 512],
    ['icon_512x512@2x.png', 1024],
  ] as const) {
    run('/usr/bin/sips', [
      '-z',
      String(size),
      String(size),
      sourcePng,
      '--out',
      path.join(iconsetDir, name),
    ]);
  }

  const iconPath = path.join(tempDir, `${productName}.icns`);
  run('/usr/bin/iconutil', ['-c', 'icns', iconsetDir, '-o', iconPath]);
  return iconPath;
};

const main = async () => {
  if (process.platform !== 'darwin') {
    throw new Error('macOS에서만 DMG를 만들 수 있습니다.');
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kareer-macos-'));

  try {
    const [packageDir] = await packager({
      appBundleId: 'com.teamkareer.kareer',
      appCategoryType: 'public.app-category.business',
      arch,
      asar: true,
      dir: desktopDir,
      icon: makeIcon(tempDir),
      ignore: [
        /\/node_modules(?:\/|$)/,
        /\/scripts(?:\/|$)/,
        /\.test\.js$/,
        /\.ts$/,
      ],
      name: productName,
      out: outDir,
      overwrite: true,
      platform: 'darwin',
      prune: false,
    });

    if (!packageDir) {
      throw new Error('Electron 앱 패키징 결과를 찾을 수 없습니다.');
    }

    const appPath = path.join(packageDir, `${productName}.app`);
    run('/usr/bin/codesign', ['--force', '--deep', '--sign', '-', appPath]);

    const dmgSourceDir = path.join(tempDir, 'dmg');
    fs.mkdirSync(dmgSourceDir);
    run('/usr/bin/ditto', [
      appPath,
      path.join(dmgSourceDir, `${productName}.app`),
    ]);
    fs.symlinkSync('/Applications', path.join(dmgSourceDir, 'Applications'));

    const makeDir = path.join(outDir, 'make');
    const dmgPath = path.join(makeDir, `${productName}-${version}-${arch}.dmg`);
    fs.mkdirSync(makeDir, { recursive: true });
    run('/usr/bin/hdiutil', [
      'create',
      '-volname',
      productName,
      '-srcfolder',
      dmgSourceDir,
      '-ov',
      '-format',
      'UDZO',
      dmgPath,
    ]);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
};

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
