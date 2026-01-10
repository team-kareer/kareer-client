import { sentryVitePlugin } from '@sentry/vite-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
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
    sentryVitePlugin({
      org: 'team-kareer',
      project: 'kareer-client',
      authToken: process.env.SENTRY_AUTH_TOKEN,
      disable: !process.env.SENTRY_AUTH_TOKEN,
    }),
    vanillaExtractPlugin(),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@kds/ui/components': path.resolve(
        __dirname,
        '../../packages/kds-ui/src/components',
      ),
    },
  },
});
