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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e8e114",
        
"secondary": "#4a66ad",
        
"accent": "#ed6dbc",
        
"neutral": "#1A1A29",
        
"base-100": "#34313A",
        
"info": "#6A96E7",
        
"success": "#52EBBF",
        
"warning": "#C57411",
        
"error": "#F54332",
        },
      },
    ],
  },
}