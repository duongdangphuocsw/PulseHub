import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        habitTracking: 'http://localhost:5174/assets/remoteEntry.js',
        quoteGeneration: 'http://localhost:5175/assets/remoteEntry.js',
        decisionJournal: 'http://localhost:5176/assets/remoteEntry.js',
        admin: 'http://localhost:5177/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5173,
  },
});
