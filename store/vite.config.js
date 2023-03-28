import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [vue(),
    federation({
      name: 'store-app',
      filename: 'remoteEntry.js',
      exposes: {
        './counter.js': './src/stores/counter.js',
      },
      shared: ['vue', 'pinia']
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
