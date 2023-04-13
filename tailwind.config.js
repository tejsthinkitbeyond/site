/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01cb8a',
        secondary: '#009786',
      },
      backgroundImage: {
        hero: "url('/pattern-white.svg')",
      },
    },
  },
  plugins: [],
};
