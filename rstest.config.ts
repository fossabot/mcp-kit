import { defineConfig } from '@rstest/core';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@common': resolve(import.meta.dirname, 'packages/common/index.ts'),
    },
  },
});
