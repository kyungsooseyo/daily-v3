import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
  server: {
    host: true,
    hmr: true,
    port: 3555,
    proxy: {
      '/api': { target: 'https://test-api.jdl.com', changeOrigin: true, rewrite: (path) => path.replace(/^\/api/, '') },
    },
  },
})
