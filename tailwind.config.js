/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mont", "arial"],
        MontHeavy: ["MontHeavy", "arial"],
        MontSemiBold: ["MontSemiBold", "arial"],
        MontBold: ["MontBold", "arial"],
      },
      colors: {
        primary: "#5135ff",
      },
    },
  },
  plugins: [],
};
