import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true
    })],
  
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'balanced-ui',
      fileName: (format) =>
        format === 'es' ? 'balanced-ui.js' : 'balanced-ui.umd.cjs',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "styled-components"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
          "styled-components": "styled"
        }
      }
    },
  }
})