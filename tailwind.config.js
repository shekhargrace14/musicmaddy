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
        '0%' :{ backgroundColor: 'hsl(200, 200, 70%)' } ,
        '100%' :{ backgroundColor: 'hsl(200, 200, 95%)' } ,
        }
      }
    },
  },
  plugins: [],
}