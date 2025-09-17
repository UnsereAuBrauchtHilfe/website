/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ADE1E5',
        'primary-dark': '#89C5C9',
        secondary: '#4A90A8',
        'accent-color': '#F97316',
      },
      fontFamily: {
        avenir: ['Nunito', 'Avenir Next', 'Avenir', 'sans-serif'],
      },
      animation: {
        ripple: 'ripple 2s infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};