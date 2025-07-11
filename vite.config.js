import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'https://dcweb-fullstack-backend-4.onrender.com', // change to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
