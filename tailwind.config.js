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
      }
    },
  },
  plugins: [],
}

