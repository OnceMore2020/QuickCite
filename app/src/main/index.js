'use strict'

import { app, BrowserWindow } from 'electron'
import log from 'electron-log'
import { autoUpdater } from 'electron-updater'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    frame: false
  })
  mainWindow.setMenu(null)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('ready', () => {
  createWindow()
  autoUpdater.checkForUpdates()
})

autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'info'
autoUpdater.on('update-downloaded', (ev, info) => {
  autoUpdater.quitAndInstall()
})
