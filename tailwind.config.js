/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#1D1F23',
        primary: '#151618',
      
    
  },},
  screens: {
    xs:'320px',
    sm:'375px',
    sml:'500px',
    md:'667px',
    mdl : '786px',
    lg:'960px',
    lgl:'1024px',
    xl:'1280px',
  },



  plugins: [],
}}
