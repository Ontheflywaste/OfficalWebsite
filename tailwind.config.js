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
        gold: {
          DEFAULT: '#d4af37',
          light: '#e9c967',
          dark: '#a8801f',
        },
        water: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          deep: '#0c4a6e',
          mist: '#e0f2fe',
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },
      animation: {
        'image-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radial-drift': 'radial-drift 18s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'map-ping': 'map-ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'radar-sweep': 'radar-sweep 6s linear infinite',
      },
      keyframes: {
        'radial-drift': {
          '0%, 100%': { transform: 'translate3d(-5%, -5%, 0) scale(1)' },
          '50%': { transform: 'translate3d(5%, 5%, 0) scale(1.1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25%) translateY(-4px)' },
        },
        'map-ping': {
          '0%': { transform: 'scale(0.85)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
