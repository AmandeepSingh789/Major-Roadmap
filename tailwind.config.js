/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Professional: ['Climate Crisis', 'cursive'],
        Roboto:['Roboto Condensed','sans-serif']
    },
    // backgroundImage: {
    //   'hero': "url('./src/assets/bg.jpeg')",
    // },
    },
  },
  plugins: [],
}
