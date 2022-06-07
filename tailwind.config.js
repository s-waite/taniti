module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#003b6d',
        'blue-sky': '#6699cc',
        'dim-gray': '#676767',
        'silver': '#BDBDBD'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ],
}