/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "sm": "620px",
      "md": "768px",
      "xmd": "1200px",
      "lg": "1440px"
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      lg: "24px",
      textxl: "28px",
      text2xl: "32px",
      text5xl: "40px",
      text7xl: "72px",
      text9xl: "80px",
      text10xl: "150px"
    },
    fontFamily: {
      'sans': ['Barlow', "sans-serif"],
      "serif": ['Fraunces', "serif"]
    },
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "darkCyan": "#0E8784",
      "darkGreyBlue": "#333D4B",
      "paleOrange": "#FDD6BA",
      "lightCream": "#FEFCF7",
      "navyBlue": "#2C343E",
      "grey": "#83888F",
      "lightGrey": "#F4F1EB",
      "transparent": "transparent"
    },
    extend: {},
  },
  plugins: [],
}

