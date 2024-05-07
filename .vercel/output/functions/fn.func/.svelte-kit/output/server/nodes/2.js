

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dig46-W-.js","_app/immutable/chunks/scheduler.Bc4aa0OE.js","_app/immutable/chunks/index.5rA_dCvR.js"];
export const stylesheets = ["_app/immutable/assets/2.DfqGwIE7.css"];
export const fonts = [];
