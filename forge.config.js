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
			config: {
				options: {
					icon: "./electron/icon.png",
					productName: "CP Calculator",
					genenicName: "CPCalculator",
					name: "cp-calculator",
				},
			},
		},
	],
};
