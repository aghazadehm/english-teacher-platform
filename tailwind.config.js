/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        primary: "#1e293b",
        accent: "#38bdf8"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};