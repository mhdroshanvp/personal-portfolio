/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // New breakpoint for extra small screens
        'sm': '480px',  // Changed from 640px to 480px
        'md': '640px',  // Changed from 768px to 640px
        'lg': '800px',  // Changed from 1024px to 800px
        'xl': '1024px', // Changed from 1280px to 1024px
        '2xl': '1280px', // Changed from 1536px to 1280px
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Add more fonts if needed
        nunito: ['Nunito', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
