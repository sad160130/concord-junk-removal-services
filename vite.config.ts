import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env files from the root
  const env = loadEnv(mode, '.', '');

  // Prioritize specific key names to find the API Key
  const apiKey = env.API_KEY || env.VITE_API_KEY || env.GOOGLE_API_KEY || env.REACT_APP_API_KEY || process.env.API_KEY;

  // Log status during build for debugging
  if (mode === 'production') {
    if (apiKey) {
      console.log('✅ API_KEY found in environment for build.');
    } else {
      console.warn('⚠️ API_KEY is missing in build environment. Relying on runtime environment variable.');
    }
  }

  return {
    plugins: [react()],
    define: {
      // If apiKey exists, inject it as a string. 
      // If not, leave 'process.env.API_KEY' as code so it evaluates at runtime (window.process.env.API_KEY).
      'process.env.API_KEY': apiKey ? JSON.stringify(apiKey) : 'process.env.API_KEY',
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', '@google/genai', 'lucide-react'],
          },
        },
      },
    },
  };
});