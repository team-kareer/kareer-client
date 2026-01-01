import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      // 절대경로 세팅 위치
      '@app': path.resolve(__dirname, 'src/app'),
      // '@pages': path.resolve(__dirname, 'src/pages'),
      // 등등. 등.
    },
  },
});
