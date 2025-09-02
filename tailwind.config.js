/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        dark: '#0f1115',
        'text-muted': '#9CA3AF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

