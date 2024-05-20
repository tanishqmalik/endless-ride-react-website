/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photopea': "url('src/assets/Photopea.png')",
      },

      colors: {
        'D9D9D9': '#D9D9D9'
      },

      fontFamily:{
        oswald: ['Oswald']
      }
    },

    screens: {
      '1331_px': { 'max': '1331px' },
      '1064_px':{'max':'1064px'},
      '1154_px': { 'max': '1154px' },
      '974_px': { 'max': '974px' },
      
      '996_px': { 'max': '996px' },
      '626_px': { 'max': '626px' },
      '1059_px': { 'max': '1059px' },
      '430_px':{'max': '430px'},
      '624_px':{'max': '624px'}
    }
  },
  plugins: [],
}