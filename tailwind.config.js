/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}",
  "./*.html",      // Escanea todos los archivos HTML en la raíz
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200': '200% 200%',
      },
      keyframes: {
        'bg-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'bg-move': 'bg-move 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

