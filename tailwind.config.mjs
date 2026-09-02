/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep teal/navy academic palette, echoing the lab's original
        // "developmental biology meets genomics" branding.
        brand: {
  50:  '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f5a623',   // primary brand yellow — tweak this to match your logo
  600: '#d68910',
  700: '#b06f0c',
  800: '#8c580f',
  900: '#734a10',
  950: '#402705',
},
        accent: {
          50: '#fff4ed',
          100: '#ffe4d3',
          200: '#ffc4a6',
          300: '#ff9c6e',
          400: '#fb7238',
          500: '#f24f14',
          600: '#d6390b',
          700: '#b02a0c',
          800: '#8c2410',
          900: '#722011',
        },
        ink: {
          50: '#f6f7f8',
          100: '#e2e5e8',
          200: '#c5cad0',
          300: '#9ea6ad',
          400: '#767f87',
          500: '#5b636b',
          600: '#464c53',
          700: '#383d42',
          800: '#2b2f33',
          900: '#1e2124',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1140px',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
};
