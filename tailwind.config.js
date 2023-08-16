/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', '@/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lexend', 'sans-serif']
      },
      colors: {
        type: {
          fire: '#f57d31',
          normal: '#aaa67f',
          fighting: '#C12239',
          flying: '#C12239'
        }
      }
    }
  },
  plugins: []
}
