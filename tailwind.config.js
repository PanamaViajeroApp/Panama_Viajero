/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tu fuente principal
        'main': ['InvisibleSans', 'sans-serif'], 
        // Tu fuente secundaria
        'secondary': ['TangoSans', 'sans-serif'],
        'secondary-bold': ['TangoSansBold', 'sans-serif'],
        'secondary-italic': ['TangoSansItalic', 'sans-serif'],
        'secondary-bold-italic': ['TangoSansBoldItalic', 'sans-serif'],
        // Body
        'body': ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        // Otras fuentes
        'accent': ['Caveat', 'TangoSansItalic', 'Segoe Script', 'cursive'],
      },
      colors: {
        brand: {
          red: '#CD2E4C',
          blue: '#4956A2',
          charcoal: '#4D4C4C',
          soft: '#EBEBEB',
          white: '#FFFFFF',
        },
      },
      // ------------------
      keyframes: {
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-right': 'marquee-right 18s linear infinite',
      },
    },
  },
  plugins: [],
}
