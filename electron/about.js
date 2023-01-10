const { BrowserWindow, ipcMain } = require("electron");
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
	});
	// cleanup after close
	aboutWindow.once("closed", () => {
		aboutWindow = null;
		ipcMain.removeHandler("close-about");
	});

	// choose source based on environment
	if (IS_DEV) {
		aboutWindow.loadURL("http://localhost:5173/#/about");
	} else {
		const file =
			"file://" + path.join(__dirname, "..", "dist", "index.html#", "about");
		aboutWindow.loadURL(file);
	}
}

module.exports = createWindow;
