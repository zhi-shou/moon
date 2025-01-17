import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moon/docs/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    https: false
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    // 确保生成 JavaScript 文件
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
