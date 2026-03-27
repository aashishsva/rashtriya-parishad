/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3a6b",
        accent: "#c8102e",
        "accent-dark": "#a50d24",
        gold: "#d4a017",
        "gold-light": "#f5d76e",
        cream: "#fdf8f0",
      },
    },
  },
  plugins: [],
};