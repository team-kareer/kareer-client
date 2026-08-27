import { app, BrowserWindow, shell } from 'electron';

import { productName } from '../package.json';
import { isAllowedNavigationUrl, isHttpsUrl } from './url-policy.js';

const WEB_URL = 'https://app.ka-reer.com';

app.setName(productName);

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      contextIsolation: true,
      devTools: !app.isPackaged,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!isAllowedNavigationUrl(url)) {
      event.preventDefault();
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (isHttpsUrl(url)) {
      void shell.openExternal(url);
    }

    return { action: 'deny' };
  });

  mainWindow.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => callback(false),
  );

  void mainWindow
    .loadURL(WEB_URL)
    .catch((error) =>
      console.error(`${productName} 웹을 불러오지 못했습니다.`, error),
    );
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
