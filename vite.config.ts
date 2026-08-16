import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Standard multi-file build. Images are bundled into dist/assets/ as local files
// (no external/Google requests). On Linux Mint, external CSS/JS render fine, so we
// don't need the single-file inline trick (that was only for the old Manjaro Firefox).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // keep images as separate files (don't base64-inline)
  },
});
