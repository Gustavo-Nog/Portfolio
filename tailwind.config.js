/** @type {import('tailwindcss').Config} */
export default  {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-brand-blue','bg-brand-blue','text-matrix','bg-matrix'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0c0e82',
        gold: '#ffb400',
        black: '#000000',
        white: '#ffffff',
        gray: '#808080',
        matrix: '#006713',
      },
    },
  },
  plugins: [],
}