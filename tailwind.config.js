/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        pink: '#F06364',
        orange: '#F09C3C',
        lightGreen: '#a9f0d129',
        gray: {
          lighter: '#D9DEDE',
          light: '#AEB5B2',
          base: '#6D7570',
          dark: '#2E3331'
        }
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px']
      },
      maxWidth: {
        pcCol1: '750px'
      },
      fontWeight: {
        light: 200,
        normal: 300,
        medium: 400,
        bold: 500
      }
    }
  },
  plugins: [require('daisyui')]
}
