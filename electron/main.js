const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

const IS_DEV = process.env.DEVELOPMENT;
const IS_MAC = process.platform === "darwin";

/* Menus */
require("./menus");

/* Main Window */

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 640,
		height: 960,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	mainWindow.setTitle("Calculator App");

	if (IS_DEV) {
		mainWindow.loadURL("http://localhost:5173");
	} else {
		const file = "file://" + path.join(__dirname, "..", "dist", "index.html");
		mainWindow.loadURL(file);
	}
}

app
	.whenReady()
	.then(() => {
		createWindow();

		app.on("activate", () => {
			if (BrowserWindow.getAllWindows().length === 0) createWindow();
		});
	})
	.catch((e) => console.log(e));

/* Other Windows */

app.on("window-all-closed", () => {
	if (!IS_MAC) app.quit();
});
