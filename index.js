const { app, BrowserWindow } = require('electron')

app.on('ready', async () => {
    const browserWindow = new BrowserWindow({
        show: false,
    })
    browserWindow.showInactive()
    // browserWindow.maximize()
    await browserWindow.loadFile(require('path').join(__dirname, './dummy.html'))
    browserWindow.webContents.openDevTools({
        mode: 'detach',
        activate: false,
    })
})
