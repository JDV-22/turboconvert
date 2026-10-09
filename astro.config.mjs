import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://turboconvert.io',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  vite: {
    build: { assetsInlineLimit: 0, chunkSizeWarningLimit: 4000 },
    optimizeDeps: { exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'] },
    worker: { format: 'es' },
  },
});
