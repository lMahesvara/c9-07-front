/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#990100',
        secondary: '#800100',
        discount: '#afaeae',
        description: '#808080',
        'text-primary': '#0F0F0F',
        'text-footer': '#B3B3B3',
        bgColor: '#0F0F0F',
        bgDiscount: '#C5F5D6',
        'text-discount': '#309654',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.png')",
        'hero-pattern-desktop': "url('/images/hero-pattern-desktop.png')",
      },
      minHeight: {
        100: '100vh',
        wNav: 'calc(100vh - 2.6rem)',
        checkout: 'calc(100vh - 5.6rem)',
      },
    },
  },
  plugins: [require('daisyui')],
}
