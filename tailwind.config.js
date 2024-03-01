/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './validation.js'],
  theme: {
    extend: {
      colors: {
        "red": "hsl(0, 100%, 66%)",
        "lightGrayishViolet": "hsl(270, 3%, 87%)",
        "darkGrayishViolet": "hsl(279, 6%, 55%)",
        "veryDarkViolet": "hsl(278, 68%, 11%)",
      },

      backgroundImage: {
        "mainDesktop": "url('../images/bg-main-desktop.png')",
        "mainMobile": "url('../images/bg-main-mobile.png')",
        "cardFront": "url('../images/bg-card-front.png')",
        "cardBack": "url('../images/bg-card-back.png')",
      },

      fontFamily: {
        "space": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

