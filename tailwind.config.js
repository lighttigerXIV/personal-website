/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				neutral: 'var(--neutral)',
				'neutral-two': 'var(--neutral-two)',
				'neutral-four': 'var(--neutral-four)',
				'neutral-eight': 'var(--neutral-eight)',
				text: 'var(--text)',
				'text-two': 'var(--text-two)',
				banana: 'var(--banana)',
				kiwi: 'var(--kiwi)',
				cherry: 'var(--cherry)'
			}
		}
	},
	plugins: []
};
