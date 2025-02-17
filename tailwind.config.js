/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-down': 'slide-down 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }
    }
  },
  plugins: [
    require('daisyui')

  ],
  daisyui: {
    themes: ["dark", "light"],
  },
}

