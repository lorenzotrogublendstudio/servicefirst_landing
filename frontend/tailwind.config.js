/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sf: {
          primary: '#2f969c',
          dark: '#1a1a1a',
          black: '#000000',
          light: '#f0fdfa',
          gray: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      // AGGIUNTA ANIMAZIONE MARQUEE
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Si sposta del 50% perché duplichiamo la lista
        }
      }
    },
  },
  plugins: [],
}