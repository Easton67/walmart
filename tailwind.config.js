/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        //** Header */
        gold: '#FFC220',
        lightBlue: '#E6F1FC',
        darkBlue: '#004F9A',
        //** Footer */ 
        lightBlue: '#E6F1FC',
        fontBlue: '#041E42'
      }
    },
  },
  plugins: [],
}

