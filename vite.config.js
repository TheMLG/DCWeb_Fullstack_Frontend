import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/DCWeb_Fullstack_Frontend/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // change to your backend server
        // target: 'https://z59g0pdh-3000.inc1.devtunnels.ms', // change to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
