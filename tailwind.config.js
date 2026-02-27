/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src_old_vite/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },
      animation: {
        'image-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
