import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { W as RenderUndefinedEntryError, X as UnknownContentCollectionError, et as AstroError } from "./errors-data_DWPe2qgp.mjs";
import { c as isRemotePath, d as removeBase, u as prependForwardSlash } from "./path_DW70cvEd.mjs";
import { C as unescapeHTML, T as createAstro, b as createHeadAndContent, f as renderTemplate, g as createRenderInstruction, h as addAttribute, l as renderSlot, m as renderHead, n as renderScriptElement, o as renderComponent, p as maybeRenderHead, r as renderUniqueStylesheet, t as spreadAttributes, z as generateCspDigest } from "./server_CCSctJAZ.mjs";
import { t as createComponent } from "./compiler_D3LcGEnd.mjs";
import { t as createConsoleLogger } from "./console_BS3552R5.mjs";
import { a as level, r as VALID_INPUT_FORMATS } from "./consts_DsksS5xH.mjs";
import * as z from "zod/v4";
import * as devalue from "devalue";
import { escape } from "html-escaper";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "Fruity Coffee Club 🍍" } = Astro.props;
	return renderTemplate`<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- Netlify Identity Widget -->${renderScript($$result, "C:/Users/Gifari/Documents/fruity-coffee/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}${renderHead($$result)}</head><body class="bg-[#fff5ec] text-[#5c0617] font-sans">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/Gifari/Documents/fruity-coffee/src/layouts/BaseLayout.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<nav id="navbar-container" class="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 flex justify-between items-center rounded-full transition-colors duration-300 px-4 py-2 bg-transparent"><a href="/" class="flex items-center gap-4 hover:opacity-90 transition-opacity"><img src="/pineapple.webp" alt="Logo Nanas" class="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm"></a><div class="relative"><button id="nav-btn" class="text-white font-['Space_Grotesk',sans-serif] font-bold tracking-widest uppercase text-sm flex items-center gap-2 px-5 py-3 rounded-full hover:bg-black/10 transition-colors drop-shadow-md cursor-pointer">Menu <span id="nav-arrow" class="text-[0.6rem] transition-transform duration-200">▼</span></button><div id="dropdown-menu" class="absolute right-0 mt-4 w-48 bg-[#fff5ec] border-2 border-[#ecec53] rounded-xl shadow-[5px_5px_0px_#5c0617] opacity-0 invisible transition-all duration-200 transform origin-top-right overflow-hidden pointer-events-none"><ul class="flex flex-col text-xs font-bold tracking-widest uppercase"><li><a href="/" class="block px-6 py-4 text-[#5c0617] hover:bg-[#e05263] hover:text-[#fff5ec] border-b-2 border-[#ecec53] transition duration-200">HOME</a></li><li><a href="#beans-section" class="block px-6 py-4 text-[#5c0617] hover:bg-[#e05263] hover:text-[#fff5ec] border-b-2 border-[#ecec53] transition duration-200">MY BEANS</a></li><li><a href="#recipes-section" class="block px-6 py-4 text-[#5c0617] hover:bg-[#e05263] hover:text-[#fff5ec] transition duration-200">RECIPES</a></li></ul></div></div></nav>${renderScript($$result, "C:/Users/Gifari/Documents/fruity-coffee/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gifari/Documents/fruity-coffee/src/components/Navbar.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var DATA_STORE_VIRTUAL_ID = "astro:data-layer-content";
"" + DATA_STORE_VIRTUAL_ID;
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
`${DATA_STORE_VIRTUAL_ID}`;
//#endregion
//#region node_modules/astro/dist/assets/utils/resolveImports.js
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
//#endregion
//#region node_modules/astro/dist/core/render-scope/scope.js
var SCOPE_KEY = /* @__PURE__ */ Symbol.for("astro:render-scope");
function getInstalledRenderScope() {
	return globalThis[SCOPE_KEY];
}
//#endregion
//#region node_modules/astro/dist/core/render-scope/record.js
function recordContentEntryRender(filePath) {
	if (!filePath) return;
	getInstalledRenderScope()?.getStore()?.contentEntries?.add(filePath);
}
//#endregion
//#region node_modules/astro/dist/content/data-store-source.js
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
//#endregion
//#region node_modules/astro/dist/content/data-store.js
var ChunkedCollectionParser = class {
	#entries = /* @__PURE__ */ new Map();
	#remainder = "";
	add(part) {
		const records = (this.#remainder + part).split("\n");
		this.#remainder = records.pop();
		for (const record of records) {
			const parsed = devalue.parse(record);
			if (!Array.isArray(parsed) || parsed.length !== 2 || typeof parsed[0] !== "string") throw new Error("Invalid chunked data store entry");
			this.#entries.set(parsed[0], parsed[1]);
		}
	}
	finish() {
		if (this.#remainder) throw new Error("Invalid chunked data store entry");
		return this.#entries;
	}
};
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). Each part
	* contains independently serialized entry records. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			const parser = new ChunkedCollectionParser();
			for (const part of parts) parser.add(typeof part === "string" ? part : part.default);
			collections.set(collectionName, parser.finish());
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_C4KLsDua.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map2 = devalue.unflatten(data.default);
				return ImmutableDataStore.fromMap(map2);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
var globalDataStore = dataStoreSingleton();
//#endregion
//#region node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} \u2192 ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} \u2192 ${entryId}** data does not match the collection schema.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` \u2192 ${String(entryId)}` : ""}** returned an invalid cache hint.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
//#endregion
//#region node_modules/astro/dist/content/runtime.js
var cacheHintSchema = z.object({
	tags: z.array(z.string()).optional(),
	lastModified: z.date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await z.safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections, logger }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_DXqEyLLP.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = resolveEntryData(rawEntry, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			logger.warn("content", `The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections, logger }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				logger.warn("content", `Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_DXqEyLLP.mjs");
			const data = resolveEntryData(entry, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(logger, result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(logger, result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(logger, entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) logger.error("content", message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_DXqEyLLP.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_DmR5jDRj.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			...image.srcSet.values.length > 0 ? { srcset: image.srcSet.attribute } : {}
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
function resolveImageAtPath(src, fileName, imageAssetMap) {
	const id = imageSrcToImportId(src, fileName);
	if (!id) return;
	const imported = imageAssetMap?.get(id);
	if (!imported) return;
	if (imported.__svgData) {
		const { __svgData: svgData, ...meta } = imported;
		return createSvgComponent({
			meta,
			...svgData
		});
	}
	return imported;
}
function setAtPathCopying(target, path, value) {
	if (path.length === 0) return target;
	const [key, ...rest] = path;
	const copy = Array.isArray(target) ? target.slice() : { ...target };
	copy[key] = rest.length === 0 ? value : setAtPathCopying(copy[key], rest, value);
	return copy;
}
function updateImageReferencesInData(data, fileName, imageAssetMap, imageImports) {
	if (!imageImports?.length) return data;
	let result = data;
	for (const path of imageImports) {
		let src = result;
		for (const key of path) src = src?.[key];
		if (typeof src !== "string") continue;
		const resolved = resolveImageAtPath(src, fileName, imageAssetMap);
		if (resolved !== void 0) result = setAtPathCopying(result, path, resolved);
	}
	return result;
}
function resolveEntryData(entry, imageAssetMap) {
	return updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap, entry.imageImports);
}
function createRenderEntry({ logger }) {
	return async function renderEntry(entry) {
		if (!entry) throw new AstroError(RenderUndefinedEntryError);
		recordContentEntryRender(entry.filePath);
		if (entry.deferredRender) try {
			const { default: contentModules } = await import("./content-modules_I7QRxwaA.mjs");
			const renderEntryImport = contentModules.get(entry.filePath);
			return render$1({
				collection: "",
				id: entry.id,
				renderEntryImport
			});
		} catch (e) {
			logger.error("content", `${e}`);
		}
		const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
		return {
			Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
			headings: entry?.rendered?.metadata?.headings ?? [],
			remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
		};
	};
}
async function render$1({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						return renderUniqueStylesheet(result, {
							type: "inline",
							content: style
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
//#endregion
//#region \0astro:content
var liveCollections = {};
var logger = createConsoleLogger({ level });
var getCollection = createGetCollection({
	liveCollections,
	logger
});
createGetEntry({
	liveCollections,
	logger
});
createRenderEntry({ logger });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const allBeans = await getCollection("beans");
	const allRecipes = await getCollection("recipes");
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Fruity Coffee Club",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-lcdefpme": true })}${maybeRenderHead($$result)}<main class="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden" style="background-image: url('/bg1.webp');" data-astro-cid-lcdefpme><div class="absolute inset-0 bg-black/30 z-0 pointer-events-none" data-astro-cid-lcdefpme></div><div class="relative z-10 text-center px-6" data-astro-cid-lcdefpme><p class="text-[#ecec53] font-['Space_Grotesk',sans-serif] font-bold tracking-[0.35em] uppercase text-xs md:text-sm mb-4" data-astro-cid-lcdefpme>Fruity Coffee Club</p><h1 class="text-white text-7xl md:text-[8rem] font-bold drop-shadow-2xl lowercase select-none" data-astro-cid-lcdefpme>hi there.</h1></div><a href="#beans-section" class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white opacity-80 hover:opacity-100 hover:text-[#ecec53] hover:scale-110 transition-all duration-300 cursor-pointer" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10 md:w-12 md:h-12 drop-shadow-md" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" data-astro-cid-lcdefpme></path></svg></a></main><div class="overflow-hidden border-t-4 border-[#5c0617] bg-[#ecec53] py-3 flex items-center select-none w-full" data-astro-cid-lcdefpme><div class="marquee-track flex whitespace-nowrap" data-astro-cid-lcdefpme><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>FRUITY COFFEE CLUB</span><span data-astro-cid-lcdefpme>MANUAL BREW DAILY</span><span data-astro-cid-lcdefpme>LIGHT ROAST ONLY</span></div><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" aria-hidden="true" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>FRUITY COFFEE CLUB</span><span data-astro-cid-lcdefpme>MANUAL BREW DAILY</span><span data-astro-cid-lcdefpme>LIGHT ROAST ONLY</span></div></div></div><section id="beans-section" class="min-h-screen border-t-4 border-[#5c0617] py-20 flex flex-col justify-center polkadot-bg relative overflow-hidden" data-astro-cid-lcdefpme><div class="anim-on-scroll px-6 md:px-20 mb-8 pt-4 flex flex-col items-start" data-astro-cid-lcdefpme><div class="inline-block bg-[#e05263] border-4 border-[#5c0617] rounded-full px-8 py-3 md:px-10 md:py-4 mb-4 shadow-[8px_8px_0px_2px_#5c0617] cursor-default -rotate-2" data-astro-cid-lcdefpme><h2 class="font-['Fredoka_One',sans-serif] font-normal text-4xl md:text-6xl text-white m-0 leading-none uppercase tracking-wider" data-astro-cid-lcdefpme>Recent Brews</h2></div></div><div id="beans-carousel" class="anim-on-scroll flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 px-[15vw] md:px-[40vw] py-12 hide-scrollbar w-full items-center cursor-grab active:cursor-grabbing scroll-smooth" data-astro-cid-lcdefpme>${allBeans.map((bean, i) => renderTemplate`<div${addAttribute(`bean-card snap-center shrink-0 w-[290px] md:w-[370px] bg-[#fff5ec] border-[6px] border-[#5c0617] rounded-[2.5rem] p-6 md:p-8 cursor-pointer transition-all duration-300 ease-out flex flex-col justify-between shadow-[8px_8px_0px_2px_#5c0617] ${i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"}`, "class")}${addAttribute(bean.data.name, "data-name")}${addAttribute(bean.data.origin, "data-origin")}${addAttribute(bean.data.process, "data-process")}${addAttribute(bean.data.roaster, "data-roaster")}${addAttribute(bean.data.notes, "data-notes")}${addAttribute(bean.body, "data-review")} data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><div class="bg-[#ecec53] text-[#5c0617] text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6 border-2 border-[#5c0617] transition-transform duration-300 hover:scale-110 shadow-[2px_2px_0px_#5c0617]" data-astro-cid-lcdefpme>${bean.data.roaster}</div><h3 class="font-['DM_Serif_Display',serif] text-3xl md:text-4xl font-bold leading-tight mb-4 text-[#5c0617]" data-astro-cid-lcdefpme>${bean.data.name}</h3></div><div class="mt-8 border-t-2 border-[#5c0617]/20 pt-4 flex items-center justify-between group" data-astro-cid-lcdefpme><span class="font-bold text-xs uppercase tracking-widest text-[#e05263] group-hover:translate-x-1 transition-transform" data-astro-cid-lcdefpme>Open Details</span><span class="text-xl group-hover:translate-x-2 transition-transform" data-astro-cid-lcdefpme>➔</span></div></div>`)}</div><div class="anim-on-scroll flex justify-center gap-6 mt-6 z-20" data-astro-cid-lcdefpme><button id="beans-prev" class="btn-playful bg-[#fff5ec] text-[#5c0617] border-4 border-[#5c0617] w-12 h-12 md:w-14 md:h-14 rounded-full font-black shadow-[4px_4px_0px_#5c0617] hover:bg-[#ecec53] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center cursor-pointer select-none" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" data-astro-cid-lcdefpme></path></svg></button><button id="beans-next" class="btn-playful bg-[#fff5ec] text-[#5c0617] border-4 border-[#5c0617] w-12 h-12 md:w-14 md:h-14 rounded-full font-black shadow-[4px_4px_0px_#5c0617] hover:bg-[#ecec53] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center cursor-pointer select-none" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-astro-cid-lcdefpme></path></svg></button></div></section><div class="overflow-hidden border-t-4 border-[#5c0617] bg-[#fff5ec] py-3 flex items-center select-none w-full" data-astro-cid-lcdefpme><div class="marquee-track-reverse flex whitespace-nowrap" data-astro-cid-lcdefpme><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>POUR OVER ENTHUSIAST</span><span data-astro-cid-lcdefpme>HARIO SWITCH</span><span data-astro-cid-lcdefpme>TIMEMORE S3</span></div><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" aria-hidden="true" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>POUR OVER ENTHUSIAST</span><span data-astro-cid-lcdefpme>HARIO SWITCH</span><span data-astro-cid-lcdefpme>TIMEMORE S3</span></div></div></div><section id="gear-section" class="min-h-screen md:min-h-[115vh] bg-[#fff5ec] border-t-4 border-[#5c0617] py-12 md:py-20 px-4 md:px-12 relative overflow-hidden flex flex-col justify-between bg-cover bg-bottom bg-no-repeat" style="background-image: url('/bg2.webp');" data-astro-cid-lcdefpme><div class="anim-on-scroll w-full max-w-[1500px] h-[75vh] md:h-[680px] mx-auto relative block my-auto" data-astro-cid-lcdefpme><div class="gear-item group absolute left-[5%] top-[8%] md:left-[2%] md:top-[4%] w-[140px] md:w-[240px] lg:w-[280px] cursor-pointer z-10" data-astro-cid-lcdefpme><div class="relative transition-all duration-500 ease-out group-hover:scale-110 -rotate-12" data-astro-cid-lcdefpme><img src="/timemore.webp" alt="Timemore S3" loading="lazy" decoding="async" class="w-full h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] select-none" data-astro-cid-lcdefpme></div><div class="absolute -bottom-10 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:translate-y-1" data-astro-cid-lcdefpme><span class="bg-[#5c0617] text-[#ecec53] font-['Space_Grotesk',sans-serif] text-xs md:text-sm font-bold px-4 py-2 rounded-xl border-2 border-[#ecec53] whitespace-nowrap shadow-[4px_4px_0px_#5c0617]" data-astro-cid-lcdefpme>Timemore Chestnut S3 (Manual Grinder)</span></div></div><div class="gear-item group absolute right-[5%] top-[28%] md:right-auto md:left-[34%] md:top-[12%] w-[160px] md:w-[260px] lg:w-[310px] cursor-pointer z-10" data-astro-cid-lcdefpme><div class="relative transition-all duration-500 ease-out group-hover:scale-110 rotate-6" data-astro-cid-lcdefpme><img src="/mugen.webp" alt="Hario Switch &amp; Mugen" loading="lazy" decoding="async" class="w-full h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] select-none" data-astro-cid-lcdefpme></div><div class="absolute -bottom-10 right-0 md:left-1/2 md:-translate-x-1/2 md:right-auto opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:translate-y-1" data-astro-cid-lcdefpme><span class="bg-[#5c0617] text-[#ecec53] font-['Space_Grotesk',sans-serif] text-xs md:text-sm font-bold px-4 py-2 rounded-xl border-2 border-[#ecec53] whitespace-nowrap shadow-[4px_4px_0px_#5c0617]" data-astro-cid-lcdefpme>Hario Switch + Mugen Dripper</span></div></div><div class="gear-item group absolute left-[10%] bottom-[25%] md:left-auto md:right-[2%] md:top-[3%] md:bottom-auto w-[130px] md:w-[240px] lg:w-[280px] cursor-pointer z-10" data-astro-cid-lcdefpme><div class="relative transition-all duration-500 ease-out group-hover:scale-110 rotate-12" data-astro-cid-lcdefpme><img src="/paper.webp" alt="Cafec Abaca Paper" loading="lazy" decoding="async" class="w-full h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] select-none" data-astro-cid-lcdefpme></div><div class="absolute -bottom-10 left-0 md:right-0 md:left-auto opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:translate-y-1" data-astro-cid-lcdefpme><span class="bg-[#5c0617] text-[#ecec53] font-['Space_Grotesk',sans-serif] text-xs md:text-sm font-bold px-4 py-2 rounded-xl border-2 border-[#ecec53] whitespace-nowrap shadow-[4px_4px_0px_#5c0617]" data-astro-cid-lcdefpme>Cafec Abaca & T-90 Paper Filters</span></div></div><div class="gear-item group absolute right-[5%] bottom-[5%] md:right-[10%] md:top-[36%] md:bottom-auto w-[140px] md:w-[250px] lg:w-[290px] cursor-pointer z-10" data-astro-cid-lcdefpme><div class="relative transition-all duration-500 ease-out group-hover:scale-110 -rotate-15" data-astro-cid-lcdefpme><img src="/mineral.webp" alt="Water Minerals" loading="lazy" decoding="async" class="w-full h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] select-none" data-astro-cid-lcdefpme></div><div class="absolute -bottom-10 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:translate-y-1" data-astro-cid-lcdefpme><span class="bg-[#5c0617] text-[#ecec53] font-['Space_Grotesk',sans-serif] text-xs md:text-sm font-bold px-4 py-2 rounded-xl border-2 border-[#ecec53] whitespace-nowrap shadow-[4px_4px_0px_#5c0617]" data-astro-cid-lcdefpme>Kromatik Tint Water Minerals Mix</span></div></div></div></section><div class="overflow-hidden border-t-4 border-[#5c0617] bg-[#ecec53] py-3 flex items-center select-none w-full" data-astro-cid-lcdefpme><div class="marquee-track flex whitespace-nowrap" data-astro-cid-lcdefpme><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>POUR OVER ENTHUSIAST</span><span data-astro-cid-lcdefpme>HARIO SWITCH</span><span data-astro-cid-lcdefpme>TIMEMORE S3</span></div><div class="marquee-group flex gap-12 font-['Space_Grotesk',sans-serif] font-bold text-xl md:text-2xl text-[#5c0617] tracking-widest uppercase pr-12" aria-hidden="true" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>POUR OVER ENTHUSIAST</span><span data-astro-cid-lcdefpme>HARIO SWITCH</span><span data-astro-cid-lcdefpme>TIMEMORE S3</span></div></div></div><section id="recipes-section" class="min-h-screen border-t-4 border-[#5c0617] py-20 flex flex-col justify-center polkadot-bg relative overflow-hidden" data-astro-cid-lcdefpme><div class="anim-on-scroll px-6 md:px-20 mb-8 pt-4 flex flex-col items-start" data-astro-cid-lcdefpme><div class="inline-block bg-[#e05263] border-4 border-[#5c0617] rounded-full px-8 py-3 md:px-10 md:py-4 mb-4 shadow-[8px_8px_0px_2px_#5c0617] cursor-default rotate-2" data-astro-cid-lcdefpme><h2 class="font-['Fredoka_One',sans-serif] font-normal text-4xl md:text-6xl text-white m-0 leading-none uppercase tracking-wider" data-astro-cid-lcdefpme>Brewing Recipes</h2></div></div><div id="recipes-carousel" class="anim-on-scroll flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 px-[15vw] md:px-[40vw] py-12 hide-scrollbar w-full items-center cursor-grab active:cursor-grabbing scroll-smooth z-10" data-astro-cid-lcdefpme>${allRecipes.map((recipe, i) => renderTemplate`<div${addAttribute(`recipe-card snap-center shrink-0 w-[290px] md:w-[370px] bg-[#fff5ec] border-[6px] border-[#5c0617] rounded-[2.5rem] p-6 md:p-8 cursor-pointer transition-all duration-300 ease-out flex flex-col justify-between shadow-[8px_8px_0px_2px_#5c0617] ${i % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"}`, "class")}${addAttribute(recipe.data.title, "data-title")}${addAttribute(recipe.data.dripper, "data-dripper")}${addAttribute(recipe.data.ratio, "data-ratio")}${addAttribute(recipe.data.waterTemp, "data-watertemp")}${addAttribute(recipe.data.grindSize, "data-grindsize")}${addAttribute(recipe.body, "data-instructions")} data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><div class="bg-[#ecec53] text-[#5c0617] text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6 border-2 border-[#5c0617] transition-transform duration-300 hover:scale-110 shadow-[2px_2px_0px_#5c0617]" data-astro-cid-lcdefpme>${recipe.data.dripper}</div><h3 class="font-['DM_Serif_Display',serif] text-3xl md:text-4xl font-bold leading-tight mb-4 text-[#5c0617]" data-astro-cid-lcdefpme>${recipe.data.title}</h3></div><div class="mt-8 border-t-2 border-[#5c0617]/20 pt-4 flex items-center justify-between group" data-astro-cid-lcdefpme><span class="font-bold text-xs uppercase tracking-widest text-[#e05263] group-hover:translate-x-1 transition-transform" data-astro-cid-lcdefpme>Open Recipe</span><span class="text-xl group-hover:translate-x-2 transition-transform" data-astro-cid-lcdefpme>➔</span></div></div>`)}</div><div class="anim-on-scroll flex justify-center gap-6 mt-6 z-20" data-astro-cid-lcdefpme><button id="recipes-prev" class="btn-playful bg-[#fff5ec] text-[#5c0617] border-4 border-[#5c0617] w-12 h-12 md:w-14 md:h-14 rounded-full font-black shadow-[4px_4px_0px_#5c0617] hover:bg-[#ecec53] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center cursor-pointer select-none" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" data-astro-cid-lcdefpme></path></svg></button><button id="recipes-next" class="btn-playful bg-[#fff5ec] text-[#5c0617] border-4 border-[#5c0617] w-12 h-12 md:w-14 md:h-14 rounded-full font-black shadow-[4px_4px_0px_#5c0617] hover:bg-[#ecec53] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center cursor-pointer select-none" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-astro-cid-lcdefpme></path></svg></button></div></section><footer id="footer-section" class="min-h-[5vh] border-t-4 border-[#ecec53] py-16 px-6 md:px-20 relative flex flex-col justify-between items-center overflow-hidden" style="background-color: #5c0617; background-image: linear-gradient(45deg, #70081d 25%, transparent 25%), linear-gradient(-45deg, #70081d 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #70081d 75%), linear-gradient(-45deg, transparent 75%, #70081d 75%); background-size: 40px 40px; background-position: 0 0, 0 20px, 20px -20px, -20px 0px; animation: footerCheckerMove 4s linear infinite;" data-astro-cid-lcdefpme><div class="absolute inset-0 bg-black/10 z-0 pointer-events-none" data-astro-cid-lcdefpme></div><div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#5c0617] font-bold" data-astro-cid-lcdefpme><p class="bg-[#fff5ec]/90 px-4 py-2 border-2 border-[#5c0617] rounded-xl shadow-[4px_4px_0px_#5c0617] whitespace-nowrap" data-astro-cid-lcdefpme>© 2026 Fruity Coffee Club</p></div></footer><div id="bean-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4" data-astro-cid-lcdefpme><div id="modal-backdrop" class="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer opacity-0 transition-opacity duration-300" data-astro-cid-lcdefpme></div><div id="modal-content" class="relative bg-[#fff5ec] border-[6px] border-[#5c0617] rounded-[2rem] shadow-[12px_12px_0px_2px_#5c0617] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 transition-all duration-300 hide-scrollbar" data-astro-cid-lcdefpme><button id="close-modal" class="absolute top-6 right-6 bg-[#e05263] text-white border-2 border-[#5c0617] w-12 h-12 rounded-full font-bold shadow-[4px_4px_0px_#5c0617] hover:rotate-90 hover:scale-110 hover:shadow-none transition-all duration-300 flex items-center justify-center text-xl" data-astro-cid-lcdefpme>X</button><h2 id="modal-name" class="font-['Fredoka_One',sans-serif] text-4xl md:text-5xl mb-8 text-[#5c0617] pr-12 leading-tight" data-astro-cid-lcdefpme></h2><div class="mb-8 pb-8 border-b-2 border-[#5c0617]/20" data-astro-cid-lcdefpme><h3 class="font-bold text-xl md:text-2xl text-[#5c0617] mb-4" data-astro-cid-lcdefpme>Beans Info</h3><ul class="space-y-2 font-['Space_Grotesk',sans-serif] text-lg text-[#5c0617]" data-astro-cid-lcdefpme><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Origin:</strong> <span id="modal-origin" data-astro-cid-lcdefpme></span></li><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Process:</strong> <span id="modal-process" data-astro-cid-lcdefpme></span></li><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Roaster:</strong> <span id="modal-roaster" data-astro-cid-lcdefpme></span></li><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Notes:</strong> <span id="modal-notes" class="text-[#e05263] font-bold" data-astro-cid-lcdefpme></span></li></ul></div><div data-astro-cid-lcdefpme><h3 class="font-bold text-xl md:text-2xl text-[#5c0617] mb-2" data-astro-cid-lcdefpme>My Thoughts</h3><div id="modal-review" class="font-['Space_Grotesk',sans-serif] text-[#5c0617] mt-3 leading-relaxed text-lg" data-astro-cid-lcdefpme></div></div></div></div><div id="recipe-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4" data-astro-cid-lcdefpme><div id="recipe-modal-backdrop" class="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer opacity-0 transition-opacity duration-300" data-astro-cid-lcdefpme></div><div id="recipe-modal-content" class="relative bg-[#fff5ec] border-[6px] border-[#5c0617] rounded-[2rem] shadow-[12px_12px_0px_2px_#5c0617] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 transition-all duration-300 hide-scrollbar" data-astro-cid-lcdefpme><button id="recipe-close-modal" class="absolute top-6 right-6 bg-[#e05263] text-white border-2 border-[#5c0617] w-12 h-12 rounded-full font-bold shadow-[4px_4px_0px_#5c0617] hover:rotate-90 hover:scale-110 hover:shadow-none transition-all duration-300 flex items-center justify-center text-xl" data-astro-cid-lcdefpme>X</button><div id="recipe-modal-dripper" class="bg-[#ecec53] text-[#5c0617] text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6 border-2 border-[#5c0617]" data-astro-cid-lcdefpme></div><h2 id="recipe-modal-title" class="font-['DM_Serif_Display',serif] text-4xl md:text-5xl mb-8 text-[#5c0617] pr-12 leading-tight" data-astro-cid-lcdefpme></h2><div class="mb-8 pb-8 border-b-2 border-[#5c0617]/20" data-astro-cid-lcdefpme><h3 class="font-bold text-xl md:text-2xl text-[#5c0617] mb-4" data-astro-cid-lcdefpme>Brew Parameters</h3><ul class="space-y-2 font-['Space_Grotesk',sans-serif] text-lg text-[#5c0617]" data-astro-cid-lcdefpme><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Ratio:</strong> <span id="recipe-modal-ratio" data-astro-cid-lcdefpme></span></li><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Water Temp:</strong> <span id="recipe-modal-watertemp" data-astro-cid-lcdefpme></span></li><li data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>• Grind Size:</strong> <span id="recipe-modal-grindsize" class="text-[#e05263] font-bold" data-astro-cid-lcdefpme></span></li></ul></div><div class="mb-8 p-5 bg-[#ecec53] border-4 border-[#5c0617] rounded-2xl shadow-[6px_6px_0px_#5c0617]" data-astro-cid-lcdefpme><h4 class="font-['Space_Grotesk',sans-serif] font-black text-base text-[#5c0617] uppercase tracking-wider mb-3 flex items-center gap-2" data-astro-cid-lcdefpme>Interactive Recipe & Dose Calculator</h4><div class="flex flex-col gap-3 font-['Space_Grotesk',sans-serif] text-xs md:text-sm text-[#5c0617]" data-astro-cid-lcdefpme><div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-astro-cid-lcdefpme><div class="flex items-center justify-between gap-2" data-astro-cid-lcdefpme><label for="target-water-input" class="font-bold" data-astro-cid-lcdefpme>Total Water (ml):</label><input id="target-water-input" type="number" value="250" step="10" min="100" max="1000" class="w-24 px-2 py-1 font-bold text-center border-2 border-[#5c0617] rounded-lg bg-[#fff5ec]" data-astro-cid-lcdefpme></div><div class="flex items-center justify-between gap-2" data-astro-cid-lcdefpme><label for="brew-ratio-select" class="font-bold" data-astro-cid-lcdefpme>Brew Ratio:</label><select id="brew-ratio-select" class="w-24 px-2 py-1 font-bold text-center border-2 border-[#5c0617] rounded-lg bg-[#fff5ec]" data-astro-cid-lcdefpme><option value="15" data-astro-cid-lcdefpme>1 : 15</option><option value="15.5" selected data-astro-cid-lcdefpme>1 : 15.5</option><option value="16" data-astro-cid-lcdefpme>1 : 16</option><option value="16.5" data-astro-cid-lcdefpme>1 : 16.5</option></select></div></div><div class="flex items-center justify-between gap-2 pt-1" data-astro-cid-lcdefpme><label for="bean-process-select" class="font-bold" data-astro-cid-lcdefpme>Bean Process:</label><select id="bean-process-select" class="w-48 px-2 py-1 font-bold text-center border-2 border-[#5c0617] rounded-lg bg-[#fff5ec]" data-astro-cid-lcdefpme><option value="washed" data-astro-cid-lcdefpme>Washed / Wet</option><option value="anaerobic" selected data-astro-cid-lcdefpme>Anaerobic / Thermal</option><option value="giling-basah" data-astro-cid-lcdefpme>Giling Basah (P88)</option><option value="natural" data-astro-cid-lcdefpme>Geisha / Natural</option></select></div><div class="grid grid-cols-3 gap-2 text-center pt-3 border-t-2 border-[#5c0617]/30" data-astro-cid-lcdefpme><div class="bg-[#fff5ec] p-2 rounded-xl border-2 border-[#5c0617]" data-astro-cid-lcdefpme><span class="block text-[10px] uppercase font-bold text-[#e05263]" data-astro-cid-lcdefpme>Coffee Dose</span><span id="coffee-dose-res" class="font-black text-sm md:text-base" data-astro-cid-lcdefpme>16.1 g</span></div><div class="bg-[#fff5ec] p-2 rounded-xl border-2 border-[#5c0617]" data-astro-cid-lcdefpme><span class="block text-[10px] uppercase font-bold text-[#5c0617]" data-astro-cid-lcdefpme>Water Temp</span><span id="ideal-temp-res" class="font-black text-sm md:text-base" data-astro-cid-lcdefpme>92°C</span></div><div class="bg-[#fff5ec] p-2 rounded-xl border-2 border-[#5c0617]" data-astro-cid-lcdefpme><span class="block text-[10px] uppercase font-bold text-[#5c0617]" data-astro-cid-lcdefpme>Brew Time</span><span id="brew-time-res" class="font-black text-sm md:text-base" data-astro-cid-lcdefpme>02:30</span></div></div></div></div><div data-astro-cid-lcdefpme><h3 class="font-bold text-xl md:text-2xl text-[#5c0617] mb-2" data-astro-cid-lcdefpme>Instructions</h3><div id="recipe-modal-instructions" class="font-['Space_Grotesk',sans-serif] text-[#5c0617] mt-3 leading-relaxed text-lg bg-[#f8e5d6] p-6 rounded-2xl border-2 border-[#5c0617]" data-astro-cid-lcdefpme></div></div></div></div>` })}${renderScript($$result, "C:/Users/Gifari/Documents/fruity-coffee/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gifari/Documents/fruity-coffee/src/pages/index.astro", void 0);
var $$file = "C:/Users/Gifari/Documents/fruity-coffee/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
