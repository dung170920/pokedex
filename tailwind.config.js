/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(bg|text|border|shadow)-type-/,
      variants: ['hover', 'before']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lexend', 'sans-serif']
      },
      spacing: {
        112: '28rem'
      },
      colors: {
        gray: {
          dark: '#212121',
          medium: '#666666',
          light: '#E0E0E0'
        },
        type: {
          fire: '#f57d31',
          normal: '#aaa67f',
          fighting: '#C12239',
          flying: '#A891EC',
          poison: '#A43E9E',
          ground: '#DEC16B',
          rock: '#B69E31',
          bug: '#A7B723',
          ghost: '#70559B',
          steel: '#B7B9D0',
          water: '#6493EB',
          grass: '#74CB48',
          electric: '#F9CF30',
          psychic: '#FB5584',
          ice: '#9AD6DF',
          dragon: '#7037FF',
          fairy: '#E69EAC',
          unknown: '#B8B8B8',
          dark: '#75574C'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px var(--tw-shadow-color),0 0 12px 0 var(--tw-shadow-color)'
      }
    }
  },
  plugins: []
}
