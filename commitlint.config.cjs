const fs = require('fs');

const commitMsgFilePath = process.argv[2];
const commitMessage = fs.readFileSync(commitMsgFilePath, 'utf8').trim();

const mergePatterns = [
  /^Merge pull request #\d+/,
  /^Merge branch/,
  /^Merge remote-tracking branch/,
];

const isMergeCommit = mergePatterns.some((pattern) =>
  pattern.test(commitMessage),
);

if (isMergeCommit) {
  console.log('Merge 성공!');
  process.exit(0);
}

const allowedTypes = [
  'feat',
  'fix',
  'refactor',
  'docs',
  'init',
  'style',
  'chore',
  'test',
  'deploy',
];

const firstLine = commitMessage.split('\n')[0];
const commitRegex = /^(\w+):\s{1,}(.+)$/;
const match = firstLine.match(commitRegex);

if (!match) {
  console.error(`
❌ 커밋 실패!
❗ 형식은 반드시 "type: message" 형태여야 하며, type과 message 사이엔 공백이 1개 이상 있어야 합니다.
`);
  process.exit(1);
}

const type = match[1];

if (!allowedTypes.includes(type.toLowerCase())) {
  console.error(`
❌ 커밋 실패!
❗ "${type}"는 허용되지 않은 커밋 타입입니다.
`);
  process.exit(1);
}

console.log('커밋 성공!');
