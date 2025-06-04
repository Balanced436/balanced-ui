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
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'balanced-ui',
      fileName: 'balanced-ui',
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
    }
  }
})