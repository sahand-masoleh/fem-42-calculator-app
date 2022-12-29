module.exports = {
	packagerConfig: {
		ignore: [
			/node_modules\/*/,
			/src\/*/,
			".gitignore",
			"babel.config.js",
			"forge.config.js",
			"package-lock.json",
			"tsconfig.json",
			"tsconfig.node.json",
			"vite.config.ts",
		],
	},
	makers: [
		{
			name: "@electron-forge/maker-deb",
			config: {},
		},
	],
};
