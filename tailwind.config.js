/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bg: 'hsl(var(--bg) / <alpha-value>)',
      text: 'hsl(var(--text) / <alpha-value>)',
    },
  },
  plugins: [],
};
