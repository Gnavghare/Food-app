/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c5fb',
          400: '#8aa3f8',
          500: '#6080f4',
          600: '#3c5cea',
          700: '#2e48d2',
          800: '#2a3eab',
          900: '#293886',
        },
        secondary: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#f9bf93',
          400: '#f6a262',
          500: '#f28231',
          600: '#e16b20',
          700: '#bb571a',
          800: '#98461a',
          900: '#7c3b19',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 