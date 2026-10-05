import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { f as renderTemplate } from "./server_CCSctJAZ.mjs";
import { t as createComponent } from "./compiler_D3LcGEnd.mjs";
//#region src/pages/keystatic/[...path].astro
var ____path__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
var $$Component = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`--- export const prerender = false; import ${makePage} from '@keystatic/astro/ui';
import keystaticConfig from '../../../keystatic.config';

export const ALL = makePage(keystaticConfig);`;
}, "C:/Users/Gifari/Documents/fruity-coffee/src/pages/keystatic/[...path].astro", void 0);
var $$file = "C:/Users/Gifari/Documents/fruity-coffee/src/pages/keystatic/[...path].astro";
var $$url = "/keystatic/[...path]";
//#endregion
//#region \0virtual:astro:page:src/pages/keystatic/[...path]@_@astro
var page = () => ____path__exports;
//#endregion
export { page };
