import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_x1Na2qzi.mjs";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { collection, config, fields } from "@keystatic/core";
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
//#endregion
//#region node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _config$clientId, _config$clientSecret, _config$secret;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret("KEYSTATIC_GITHUB_CLIENT_ID"),
			clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret("KEYSTATIC_GITHUB_CLIENT_SECRET"),
			secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret("KEYSTATIC_SECRET")
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		return new Response(body, {
			status,
			headers
		});
	};
}
//#endregion
//#region keystatic.config.ts
var keystatic_config_default = config({
	storage: {
		kind: "github",
		repo: "Gifarieyyz/fruity-coffee"
	},
	collections: {
		beans: collection({
			label: "Beans",
			slugField: "name",
			path: "src/content/beans/*",
			format: { contentField: "content" },
			schema: {
				name: fields.slug({ name: { label: "Nama Beans" } }),
				origin: fields.text({ label: "Origin" }),
				process: fields.text({ label: "Process" }),
				roaster: fields.text({ label: "Roaster" }),
				notes: fields.text({ label: "Flavor Notes" }),
				content: fields.markdoc({
					label: "Review & Thoughts",
					extension: "md"
				})
			}
		}),
		recipes: collection({
			label: "Recipes",
			slugField: "title",
			path: "src/content/recipes/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Judul Resep" } }),
				dripper: fields.text({ label: "Dripper" }),
				ratio: fields.text({ label: "Ratio" }),
				waterTemp: fields.text({ label: "Water Temp" }),
				grindSize: fields.text({ label: "Grind Size" }),
				content: fields.markdoc({
					label: "Instructions",
					extension: "md"
				})
			}
		})
	}
});
//#endregion
//#region node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
//#endregion
//#region \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
//#endregion
export { page };
