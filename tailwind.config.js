/** @type {import('tailwindcss').Config} */
export default {
  // Check these paths carefully! 
  // It needs to see .tsx files if you are using TypeScript.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astrodark: "#210844",
        astropurple: "#2a2b41",
        astrogold: "#c5a059",
        astrogreen: "#143628",
      },
    },
  },
  plugins: [],
}