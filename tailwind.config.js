import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#D1AF89',

          secondary: '#1E2D48',

          // accent: '#46ce73',

          // neutral: '#1e1e2f',

          'base-100': '#FFFFFF',

          info: '#9abcea',

          success: '#2fcaab',

          warning: '#f7b36e',

          error: '#db2458',
        },
      },
    ],
  },
};
