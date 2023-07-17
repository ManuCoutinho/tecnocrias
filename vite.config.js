/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }]
  }
})
