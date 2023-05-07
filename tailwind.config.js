/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "sm": "375px",
      "md": "768px",
      "lg": "1440px"
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      lg: "24px",
      text5xl: "40px",
      text7xl: "72px"
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
      "grey": "#83888F",
      "transparent": "transparent"
    },
    extend: {},
  },
  plugins: [],
}

