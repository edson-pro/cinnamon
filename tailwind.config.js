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
      backgroundImage: {
        noise: "url('/images/noise.png')",
      },
      fontSize: {
        5: "5rem",
      },
      colors: {
        primary: "#5135ff",
      },
      maxHeight: {
        17.5: "17.5rem",
      },
      maxWidth: {
        17.5: "17.5rem",
        15.625: "15.625rem",
        9.375: "9.375rem",
      },
      height: {
        0.3: "1.5px",
      },
      minWidth: {
        "1/2": "50%",
      },
      lineHeight: {
        3.125: "3.125rem",
        3.75: "3.75rem",
        3.625: "3.625rem",
      },
    },
  },
  plugins: [],
};
