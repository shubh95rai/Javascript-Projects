/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jetBrains: ["JetBrains Mono", "monospace"],
        googleSans: ["GoogleSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
