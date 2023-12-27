/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "base": "var(--base)",
        "text": "var(--text)",
        "crust": "var(--crust)",
        "mantle": "var(--mantle)",
        "yellow": "var(--yellow)",
      },
      padding:{
        large: "16px"
      },
      fontSize:{
        "extra-large": "40px"
      }
    },
  },
  plugins: [],
}

