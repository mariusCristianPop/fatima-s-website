/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        burgundy: 'var(--color-burgundy)',
        gold: 'var(--color-gold)',
        magenta: 'var(--color-magenta)',
        cream: 'var(--color-cream)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
};
