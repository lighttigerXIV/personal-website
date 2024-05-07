

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BA-tV7wN.js","_app/immutable/chunks/scheduler.Bc4aa0OE.js","_app/immutable/chunks/index.5rA_dCvR.js","_app/immutable/chunks/entry.BYdwTQvy.js"];
export const stylesheets = [];
export const fonts = [];
