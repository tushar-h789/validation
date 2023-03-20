/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth:{
        "container":"1200px"
      },
      fontFamily:{
        non:['Nunito', 'sans-serif']
      },
      colors:{
        primary: "#5F35F5"
      }
    },
  },
  plugins: [],
}
