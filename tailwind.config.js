/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {colors:{
      thisBlack: '#3E3E3E',
      thisYellow: '#FFD75C',
      thisGrey: '#F5F5F5'
    }},
    fontFamily: {
      pecita: 'pecita',
      mergeOne: 'mergeOne',
      
    },
  },
  plugins: [],
}
