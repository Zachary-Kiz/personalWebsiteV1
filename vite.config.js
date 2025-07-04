import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root : '.',
  plugins: [react()],
  build: {
    outDir: './dist',  // Where to output the build (important for Heroku)
    emptyOutDir: true
  }
})
