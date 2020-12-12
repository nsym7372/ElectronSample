"use strct";

const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on("window-all-closed", () => {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on('will-finish-launching', () => {
  console.log('will-finish-lanching');
});

function createWindow(){
  win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences:{
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true
    }
  });

  win.on('closed', () =>{
    win = null;
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// // Electronの初期化完了後に実行
// app.on("ready", () => {
//   //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
//   mainWindow = new BrowserWindow({
//     width: 1280,
//     height: 720,
//     useContentSize: true,
//     webPreferences:{
//       nodeIntegration: true,
//       contextIsolation: true
//     }
//   });

//   //使用するhtmlファイルを指定する
//   mainWindow.loadURL(`file://${__dirname}/index.html`);
//   mainWindow.webContents.openDevTools();

//   // ウィンドウが閉じられたらアプリも終了
//   mainWindow.on("closed", () => {
//     mainWindow = null;
//   });
// });