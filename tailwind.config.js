/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D1D0CE",
          100: "CECECE",
        },
        secondary: {
          DEFAULT: "#2C3539",
          100: "#FFBF00",
          200: "#FFDEAD",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        oplight: ["OpenSans-Light", "sans-serif"],
        opregular: ["OpenSans-Regular", "sans-serif"],
        opmedium: ["OpenSans-Medium", "sans-serif"],
        opsemibold: ["OpenSans-SemiBold", "sans-serif"],
        opbold: ["OpenSans-Bold", "sans-serif"],
        opextrabold: ["OpenSans-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};