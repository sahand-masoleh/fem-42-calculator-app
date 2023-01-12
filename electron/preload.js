const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("env", {
	IS_ELECTRON: true,
});

contextBridge.exposeInMainWorld("main", {
	closeAbout: () => ipcRenderer.invoke("close-about"),
	openLink: (url) => ipcRenderer.invoke("open-link", url),
});
