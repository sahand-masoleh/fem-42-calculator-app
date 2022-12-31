const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("env", {
	IS_ELECTRON: true,
	closeAbout: () => ipcRenderer.invoke("close-about"),
});
