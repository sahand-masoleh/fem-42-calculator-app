const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("env", {
	IS_ELECTRON: true,
});
