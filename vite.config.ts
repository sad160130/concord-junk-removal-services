import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env files from the root
  // The third parameter '' means load ALL env vars, not just those starting with VITE_
  const env = loadEnv(mode, (process as any).cwd(), '');

  // Prioritize specific key names to find the API Key
  const apiKey = env.API_KEY || env.VITE_API_KEY || env.GOOGLE_API_KEY || env.REACT_APP_API_KEY || process.env.API_KEY || '';

  // Log status during build for debugging Vercel logs
  if (mode === 'production') {
    if (apiKey) {
      console.log('✅ API_KEY found in environment.');
    } else {
      console.warn('⚠️ API_KEY is missing in build environment!');
    }
  }

  return {
    plugins: [react()],
    define: {
      // This polyfills process.env for the browser, making standard access work
      // We explicitly overwrite API_KEY to ensure the best candidate is used
      'process.env': JSON.stringify({ ...env, API_KEY: apiKey }),
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