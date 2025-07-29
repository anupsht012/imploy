/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      inter: ['Inter'],
    },
    fontSize: {
      xs: '0.6875rem',
      sm: '0.875rem',
      base: '1rem',
    },
  },
  },
  plugins: [],
  };