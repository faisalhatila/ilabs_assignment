/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      dark: '#201E26',
      primary: '#249ACA',
      lightPrimary: '#ffffff',
      secondary: '#6E56E0',
      white: '#ffffff',
      border: '#272727',
      pending: '#FFD928'
    },
  },
  plugins: [],
}