/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors:{
				"neutral-two":"#FFF9F0",
				"neutral-four": "#FFF3E2",
				"neutral-six":"#FFF0DA",
				"neutral-eight":"#FFECCF",
				"text":"#3E1900",
				"cherry": "#B43A2A",
				"kiwi": "#6A9534",
				"banana": "#A87B0A"
			}
		}
	},
	plugins: []
};
