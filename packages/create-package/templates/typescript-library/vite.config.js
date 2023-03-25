/// <reference types="vitest" />

// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '<replace-with-package-name>',
      fileName: '<replace-with-package-name>',
    },
  },
  test: {
    // ...
  },
  plugins: [dts()],
});