/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#212730',
        bigGray: '#393e46',
        orange: '#ff5724',
        bondiBlue: '#00aab3',
        wildSad: '#f5f5f5',
        silver: '#ededed'
      },

      backgroundImage: {
        movieImage: "url(`https://image.tmdb.org/t/p/original`)"
      }
    },
  plugins: [],
  }
} 