export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CyBGfhZH.js","app":"_app/immutable/entry/app.DWNivwA-.js","imports":["_app/immutable/entry/start.CyBGfhZH.js","_app/immutable/chunks/entry.BYdwTQvy.js","_app/immutable/chunks/scheduler.Bc4aa0OE.js","_app/immutable/entry/app.DWNivwA-.js","_app/immutable/chunks/scheduler.Bc4aa0OE.js","_app/immutable/chunks/index.5rA_dCvR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
