import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-ui': ['framer-motion', 'react-hot-toast', 'react-helmet'],
          'vendor-icons': ['lucide-react'],
          'pages-home': ['./src/pages/Home.tsx'],
          'pages-services': [
            './src/pages/Services.tsx',
            './src/pages/ValetTrashService.tsx',
            './src/pages/JunkRemovalService.tsx',
            './src/pages/PressureWashingService.tsx'
          ],
          'pages-blog': [
            './src/pages/Blog.tsx',
            './src/pages/BlogPost.tsx',
            './src/pages/ValetTrashBenefits.tsx',
            './src/pages/VendorSelectionGuide.tsx',
            './src/pages/HiddenCostsTrashManagement.tsx',
            './src/pages/SustainableWasteManagement.tsx',
            './src/pages/BulkWasteRemovalGuide.tsx'
          ]
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@emailjs/browser']
  }
});