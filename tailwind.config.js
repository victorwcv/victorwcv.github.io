/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#E5FAFF',
          100: '#C7F5FF',
          200: '#94EBFF',
          300: '#5CE1FF',
          400: '#29D8FF',
          500: '#00C4F0',
          600: '#009EC2',
          700: '#00758F',
          800: '#004F61',
          900: '#00252E',
          950: '#001519',
        },
      },
      fontFamily: {
        console: [
          'Courier New',
          'monospace',
          'Monaco',
          'Consolas',
          '"Fira Code"',
        ],
      },
    },
  },
};
