import type Type from "../Interface/Option.js";

/**
 * Default configuration object.
 */
export default {
	Cache: {
		Search: "./",
		Folder: "./Cache",
	},
	Path: "./Target",
	Logger: 2,
	Action: {
		Read: async (On) =>
			await (await import("fs/promises")).readFile(On.Input, "utf-8"),
		Wrote: async (On) => On.Buffer,
		Passed: async (On) => On && true,
		Failed: async (On) => `Error: Cannot process file ${On.Input}!`,
		Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully processed a total of ${Plan.Files} ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		Changed: async (Plan) => Plan,
	},
} satisfies Type;
