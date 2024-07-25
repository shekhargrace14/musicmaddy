/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'skeletonLoading' : "skeletonLoading 1s linear infinite alternate"
      },
      keyframes:{
        skeletonLoading : { 
        '0%' :{ backgroundColor: 'rgba(128, 128, 128, 0.3)' } ,
        '100%' :{ backgroundColor: 'rgba(128, 128, 128, 0.7)' } ,
        }
      }
    },
  },
  plugins: [],
}