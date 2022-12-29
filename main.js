const { app, BrowserWindow } = require("electron");
const path = require("path");

const IS_DEV = process.env.DEVELOPMENT;

function createWindow() {
	const win = new BrowserWindow({
		width: 640,
		height: 960,
	});

	if (IS_DEV) {
		win.loadURL("http://localhost:5173");
	} else {
		win.loadURL(`file://${path.join(__dirname, "dist", "index.html")}`);
	}
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
