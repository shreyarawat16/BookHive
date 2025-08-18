/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCE1A',
        secondary: '#0D0842',
        blackBG: '#F3F3F3',
        favourite: '#FF5841', // lowercase for consistency
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: "all", // Can also be ["light", "dark"] if you want only those two
  },
};
