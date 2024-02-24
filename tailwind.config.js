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
        "backgroundTwo": "var(--backgroundTwo)",
        "backgroundThree": "var(--backgroundThree)",
        "onBackground": "var(--onBackground)"
      }
    },
  },
  plugins: [],
}

