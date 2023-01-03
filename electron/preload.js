const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("env", {
	IS_ELECTRON: true,
});

contextBridge.exposeInMainWorld("windows", {
	closeAbout: () => ipcRenderer.invoke("close-about"),
});
