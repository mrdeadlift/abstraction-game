/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#E5E7EB',
          800: '#1F2937',
        }
      }
    },
  },
  plugins: [],
}
