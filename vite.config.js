import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
   build: {
    outDir: 'dist', // <-- this must match what you tell Vercel
  },
  plugins: [vue(), vueDevTools()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://crud-job-listings.vercel.app', // Backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes the `/api` prefix
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
