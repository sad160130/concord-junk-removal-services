import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Safely get current working directory
  // Fix: Cast process to any to avoid TS error regarding missing cwd property
  const cwd = (process as any).cwd();
  
  // Load env files from the root
  const env = loadEnv(mode, cwd, '');
  
  // Aggressively look for the API Key in various likely locations
  // Vercel System Env Vars are in process.env, .env files are in env object
  const apiKey = process.env.API_KEY || env.API_KEY || 
                 process.env.VITE_API_KEY || env.VITE_API_KEY || 
                 process.env.GOOGLE_API_KEY || env.GOOGLE_API_KEY || '';

  // Log status during build (useful for Vercel logs)
  if (mode === 'production') {
    if (apiKey) {
      console.log('✅ API_KEY found and configured for build.');
    } else {
      console.warn('⚠️ API_KEY is missing in build environment! ChatBot will not work.');
    }
  }

  return {
    plugins: [react()],
    define: {
      // Define a global constant string that contains the API Key
      // This gets replaced at build time: __GEMINI_API_KEY__ -> "AIzaSy..."
      '__GEMINI_API_KEY__': JSON.stringify(apiKey),
      
      // Fallback support for standard process.env access
      'process.env.API_KEY': JSON.stringify(apiKey),
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