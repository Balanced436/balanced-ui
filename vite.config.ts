import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {  resolve } from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'balanced-ui',
      fileName: (format) => (format === 'es' ? 'balanced-ui.js' : 'balanced-ui.umd.cjs'),
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'styled-components': 'styled',
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(__dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
});