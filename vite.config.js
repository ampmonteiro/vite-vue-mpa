import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        article: resolve(__dirname, 'article/index.html'),
      },
    },
  },
});
