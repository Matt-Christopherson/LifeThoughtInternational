/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./page2.html", "./page3.html", "./page4.html"],
  theme: {
    extend: {
      backgroundImage: {
        'vision-bg': "url('./src/images/Ethiopia.jpg')",
      },
    },
  },
  plugins: [],
}

