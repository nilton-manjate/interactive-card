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
    },
  },
  plugins: [],
}

