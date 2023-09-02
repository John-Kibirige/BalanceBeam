/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'dw-forward': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'dw-backward': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'dm-forward': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'dm-backward': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'wm-forward': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'wm-backward': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        'dw-forward': 'dw-forward 0.2s ease-in-out forwards',
        'dw-backward': 'dw-backward 0.2s ease-in-out forwards',
        'dm-forward': 'dm-forward 0.2s ease-in-out forwards',
        'dm-backward': 'dm-backward 0.2s ease-in-out forwards',
        'wm-forward': 'wm-forward 0.2s ease-in-out forwards',
        'wm-backward': 'wm-backward 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
