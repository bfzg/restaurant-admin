/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100':'35rem'
      },
      height: {
        '100':'35rem'
      },
      colors:{
        'orange':'#ff9f00'
      },
      lineHeight:{
        '100':'50rem'
      }
    },
  },
  corePlugins:{
    preflight:false
  },
  plugins: [],
}

