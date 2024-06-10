// eslint-disable-next-line no-undef
const { app, BrowserWindow } = require("electron/main")
// eslint-disable-next-line no-undef
const path = require("node:path")

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			// eslint-disable-next-line no-undef
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
			contextIsolation: false
		}
	})

	// win.loadFile("../dist/index.html")
	win.loadURL("https://jsdeveloper.uz")
}

app.whenReady().then(() => {
	createWindow()

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on("window-all-closed", () => {
	// eslint-disable-next-line no-undef
	if (process.platform !== "darwin") {
		app.quit()
	}
})
