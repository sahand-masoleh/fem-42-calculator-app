const { Menu } = require("electron");
const openAbout = require("./about");

const IS_DEV = process.env.DEVELOPMENT;
const isMac = process.platform === "darwin";

const template = [
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
		],
	},
];

const devMenu = IS_DEV
	? [
			{
				label: "Development",
				submenu: [
					{
						role: "toggleDevTools",
					},
				],
			},
	  ]
	: [];

const menu = Menu.buildFromTemplate([...template, ...devMenu]);
Menu.setApplicationMenu(menu);
