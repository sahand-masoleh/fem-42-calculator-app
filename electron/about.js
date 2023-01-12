const { BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

const IS_DEV = process.env.DEVELOPMENT;

/* About Window */
function createWindow() {
	const parentWindow = BrowserWindow.getFocusedWindow();

	// config
	let aboutWindow = new BrowserWindow({
		width: 640,
		height: 640,
		resizable: false,
		parent: parentWindow,
		modal: true,
		webPreferences: { preload: path.join(__dirname, "preload.js") },
	});
	aboutWindow.setMenu(null);
	aboutWindow.setTitle("About");

	// expose to renderer
	aboutWindow.once("ready-to-show", () => {
		ipcMain.handle("close-about", () => {
			aboutWindow.close();
		});
		ipcMain.handle("open-link", (_, url) => {
			url && shell.openExternal(url);
		});
	});
	// cleanup after close
	aboutWindow.once("closed", () => {
		aboutWindow = null;
		ipcMain.removeAllListeners();
	});

	// choose source based on environment
	if (IS_DEV) {
		aboutWindow.loadURL("http://localhost:5173/#/about");
		aboutWindow.webContents.openDevTools();
	} else {
		const file =
			"file://" + path.join(__dirname, "..", "dist", "index.html#", "about");
		aboutWindow.loadURL(file);
	}
}

module.exports = createWindow;
