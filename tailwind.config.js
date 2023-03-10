/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
screens:{
  xs:'375px',
  sm:'640px',
  md:'768',
  lg:'1024',
  xl:'1140',
  '2xl':'1140',
}
      },
      colors:{
        primary: "#ffbe33",
        secondary:"#222831"
      }
    },
    fontFamily:{
      dancing:["Dancing Script","cursive"],
      sans:['Open Sans','sans-serif'],
    }
  },
  plugins: [],
}
