/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '900px',
      'lg': '1440px',
    },
    colors: {
      'darkestGrey': '#1F2632',
      'darkGrey': '#313A48',
      'cyan': '#CDE2E8',
      'neonGreen': '#51FFA8'
    },
    extend: {
      fontFamily: {
        Manrope: ['Manrope', "sans-serif"],
       },
    },
  },
  plugins: [],
}
