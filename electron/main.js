const { app, BrowserWindow } = require("electron");
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
		webPreferences: { preload: path.join(__dirname, "preload.js") },
	});

	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});

	if (IS_DEV) {
		mainWindow.loadURL("http://localhost:5173");
	} else {
		mainWindow.loadFile(
			`file://${path.join(__dirname, ".." / "dist", "index.html")}`
		);
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
