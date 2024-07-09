/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetBrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
