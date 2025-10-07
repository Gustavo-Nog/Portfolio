/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['bg-brand-blue','text-brand-blue','bg-matrix','text-matrix'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0c0e82',
        matrix: '#006713',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to':   { width: 'var(--w, 24ch)' } // controla o alvo via CSS var
        },
        caret: {
          '50%': { 'border-color': 'transparent' }
        }
      },
    },
  },
  plugins: [],
};