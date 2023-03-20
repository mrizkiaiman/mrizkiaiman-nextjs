/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
      },
      colors: {
        gray: {
          850: '#19212c',
          950: '#0E141B',
        },
        zinc: {
          950: '#1F2028',
        },
      },
      width: {
        112: '28rem',
        128: '32rem',
        152: '38rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: 'class',
}
