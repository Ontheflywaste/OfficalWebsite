import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html',
        'video-sitemap': './video-sitemap.xml'
      },
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui': ['framer-motion', 'react-hot-toast'],
          'email': ['@emailjs/browser'],
          'helmet': ['react-helmet']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'video-sitemap.xml') {
            return 'video-sitemap.xml';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});