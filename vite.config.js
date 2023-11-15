import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import Compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ElementPlus(),
    Compression({
      threshold: 1024 * 30,
      deleteOriginFile: false,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$color: pink;`
        additionalData: `@import './src/assets/css/respond.scss';`
      }
    }
  }
});
