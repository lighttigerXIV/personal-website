/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background": "var(--background)",
        "accent": "var(--accent)",
        "text": "var(--text)",
      }
    },
  },
  plugins: [],
}

