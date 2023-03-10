/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Professional: ['Climate Crisis', 'cursive'],
        Roboto:['Roboto Condensed','sans-serif'],
        RobotoBold: ['Roboto', 'sans-serif'],
        Tilt: ['Tilt Warp', 'cursive']
    },
    boxShadow: {
      custom:'rgba(102, 252, 241, 0.4) -5px 5px, rgba(102, 252, 241, 0.3) -10px 10px, rgba(102, 252, 241, 0.2) -15px 15px, rgba(102, 252, 241, 0.1) -20px 20px, rgba(102, 252, 241, 0.05) -25px 25px',
      custom2:'rgba(102, 252, 241, 0.4) 0px 5px, rgba(102, 252, 241, 0.3) 0px 10px, rgba(102, 252, 241, 0.2) 0px 15px, rgba(102, 252, 241, 0.1) 0px 20px, rgba(102, 252, 241, 0.05) 0px 25px'
    },

    },
  },
  plugins: [],
}
