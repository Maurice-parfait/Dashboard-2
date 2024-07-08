/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "chart.js", "script.js"],
  theme: {
    extend: {
      gridTemplateColumns : {
        'grid1' : '1.2fr 5fr',
        'gridinterne1' : '1fr 1fr 1fr 1fr',
        'chart' : '5fr 3fr',
      },
    },
  },
  plugins: [],
}

