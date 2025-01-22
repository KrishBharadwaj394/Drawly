import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173, // Or the port you're using
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    allowedHosts: ['drawly.onrender.com'], // Allow your domain
  },
});
