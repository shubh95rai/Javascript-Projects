/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
