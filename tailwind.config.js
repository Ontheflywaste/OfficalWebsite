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
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          deep: '#052e16',
          done: '#049704',
        },
        surface: {
          dark: '#0d1117',
          'dark-2': '#161b22',
          'dark-border': '#21262d',
          page: '#f6f8fa',
          card: '#ffffff',
          'card-border': '#d0d7de',
        },
        ink: {
          DEFAULT: '#1f2328',
          muted: '#656d76',
          nav: '#8b949e',
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },
      animation: {
        'image-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radial-drift': 'radial-drift 18s ease-in-out infinite',
      },
      keyframes: {
        'radial-drift': {
          '0%, 100%': { transform: 'translate3d(-5%, -5%, 0) scale(1)' },
          '50%': { transform: 'translate3d(5%, 5%, 0) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
