import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "", // Esto hace falta para render hosting
  plugins: [react()],
})
