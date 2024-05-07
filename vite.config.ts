import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import svg from '@poppanator/sveltekit-svg'


export default defineConfig({
	plugins: [sveltekit(), svg()],
	css: { postcss }
});
