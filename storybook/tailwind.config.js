/** @type {import('tailwindcss').Config} */
import colors from '../build/colors.js';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
