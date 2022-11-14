/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A02279',
        secondary: '#1D1D1E',
        textColor: '#434343',
        labelColor: '#344054',
        placeholderColor: '#667085',
        border: '#D0D5DD'
      },
    },
  },
  plugins: [],
}