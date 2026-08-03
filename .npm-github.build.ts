import {
	readManifest,
	transform
} from "DNT";
const manifest = await readManifest("jsr.jsonc");
await transform({
	copyEntries: [
		"LICENSE.md",
		"README.md"
	],
	//@ts-ignore Lazy type.
	entrypointsScript: manifest.exports,
	generateDeclarationMap: true,
	metadata: {
		//@ts-ignore Lazy type.
		name: manifest.name,
		//@ts-ignore Lazy type.
		version: manifest.version,
		description: "A module to determine whether the item is plain object.",
		keywords: [
			"is",
			"object",
			"plain"
		],
		homepage: "https://github.com/hugoalh/is-object-plain-es#readme",
		bugs: {
			url: "https://github.com/hugoalh/is-object-plain-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh/is-object-plain-es.git"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm-github",
	outputDirectoryPreEmpty: true
});
