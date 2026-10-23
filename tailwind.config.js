/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#05070f',
        panel: '#0b1020',
        accent: { blue: '#3b82f6', violet: '#8b5cf6', cyan: '#22d3ee' },
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseDot: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.35' } },
      },
      animation: { float: 'float 6s ease-in-out infinite', pulseDot: 'pulseDot 2s ease-in-out infinite' },
    },
  },
  plugins: [],
};
