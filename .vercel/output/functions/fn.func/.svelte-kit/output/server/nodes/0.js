

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.qL-9dpgj.js","_app/immutable/chunks/scheduler.Bc4aa0OE.js","_app/immutable/chunks/index.5rA_dCvR.js"];
export const stylesheets = ["_app/immutable/assets/0.Dw5l6Xsx.css"];
export const fonts = [];
