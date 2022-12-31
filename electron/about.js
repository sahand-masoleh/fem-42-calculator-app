const { BrowserWindow } = require("electron");
const path = require("path");

const IS_DEV = process.env.DEVELOPMENT;

/* About Window */
function createWindow() {
	const parentWindow = BrowserWindow.getFocusedWindow();

	let aboutWindow = new BrowserWindow({
		width: 480,
		height: 480,
		webPreferences: { preload: path.join(__dirname, "preload.js") },
		parent: parentWindow,
		modal: true,
	});

	aboutWindow.setMenu(null);
	aboutWindow.once("closed", () => {
		aboutWindow = null;
	});

	if (IS_DEV) {
		aboutWindow.loadURL("http://localhost:5173/#/about");
	} else {
		aboutWindow.loadFile(
			// prettier-ignore
			`file://${path.join(__dirname, ".." / "dist", "index.html\/#\/about")}`
		);
	}
}

module.exports = createWindow;
