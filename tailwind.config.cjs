/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  // Garantir geração mesmo antes de detectar em scan (workaround enquanto debug)
  safelist: ['bg-brand-blue','text-brand-blue','bg-matrix','text-matrix'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0c0e82',
        matrix: '#006713',
      },
    },
  },
  plugins: [],
}