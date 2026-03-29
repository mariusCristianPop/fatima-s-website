/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0F0E0D',
        burgundy: '#6B2D3E',
        gold: '#C9A84C',
        magenta: '#A8224F',
        cream: '#F7F4F0',
        muted: '#6B6460',
      },
    },
  },
  plugins: [],
};
