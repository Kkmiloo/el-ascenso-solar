/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scene1': "url(/src/assets/scene1.webp)",
        'scene2': "url(/src/assets/bg-3.webp)"

      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-down': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 1.2s ease-in forwards',
        'fade-down': 'fade-down 1s ease-in forwards',
      },
    },
  },
    plugins: [
    require('tailwindcss-animated')
  ],
}

