import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: '../backend/frontend/templates',  // Ensure this matches the directory specified in STATICFILES_DIRS
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',  // Adjust this if you have an API endpoint
    },
  },
})