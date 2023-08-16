/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lexend', 'sans-serif']
      },
      colors: {
        gray: {
          dark: '#212121',
          medium: '#666666',
          light: '#E0E0E0'
        }
        // type: {
        //   fire: '#f57d31',
        //   normal: '#aaa67f',
        //   fighting: '#C12239',
        //   flying: '#C12239'
        // }
      }
    }
  },
  plugins: []
}
