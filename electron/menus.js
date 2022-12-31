const { Menu } = require("electron");
const openAbout = require("./about");

const isMac = process.platform === "darwin";

const template = [
	// { role: 'fileMenu' }
	{
		label: "File",
		submenu: [isMac ? { role: "close" } : { role: "quit" }],
	},
	{
		label: "View",
		submenu: [{ role: "togglefullscreen" }],
	},
	{
		label: "More",
		submenu: [
			{
				label: "About",
				click: () => {
					openAbout();
				},
			},
			{
				label: "Web Version",
				click: async () => {
					const { shell } = require("electron");
					await shell.openExternal(
						"https://sahand-masoleh.github.io/fem-42-calculator-app/"
					);
				},
			},
			{
				label: "Author's Portfolio",
				click: async () => {
					const { shell } = require("electron");
					await shell.openExternal("https://sahandmasoleh.com");
				},
			},
		],
	},
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
