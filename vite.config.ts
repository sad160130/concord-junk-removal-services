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
      console.warn('⚠️ API_KEY is missing in build environment. ChatBot will be offline.');
    }
  }

  return {
    plugins: [react()],
    define: {
      // specific replacement for the API key
      // Defaults to empty string if not found to prevents "process is not defined" errors in browser
      'process.env.API_KEY': JSON.stringify(apiKey || ''),
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