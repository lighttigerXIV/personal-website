/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "base": "#24273a",
        "text": "#cad3f5",
        "crust": "#181926",
        "mantle": "#1E2030",
        "sub-text": "#B8C0E0",
        "blue": "#8AADF4",
        "green": "#A6DA95",
        "teal": "#8bd5ca",
        "yellow": "#EED49F",
        "red": "#ED8796",
        "peach": "#F5A97F",
        "mauve": "#C6A0F6",
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

