/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EE',
        linen: '#ECE7DD',
        ink: '#07182A',
        mist: '#66717D',
        sage: '#123452',
        bronze: '#B7945A',
        line: '#D9D5CC',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(7, 24, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
