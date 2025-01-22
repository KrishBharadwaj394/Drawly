import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  server: {
    host: 'localhost',
    port: 5173, // or the port you're using
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});