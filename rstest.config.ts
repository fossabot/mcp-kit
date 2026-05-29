import { defineConfig } from '@rstest/core';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@common': resolve(import.meta.dirname, 'packages/common/index.ts'),
    },
  },
  coverage: {
    enabled: true,
    provider: 'v8',
    include: ['packages/core/src/**/*.ts', 'packages/utils/src/**/*.ts'],
    exclude: ['**/*.test.ts', '**/*.spec.ts', '**/node_modules/**', '**/dist/**'],
    reporters: ['text', 'html', 'lcov'],
    reportsDirectory: './coverage',
  },
});
