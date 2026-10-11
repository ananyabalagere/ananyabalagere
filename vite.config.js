import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://ananyabalagere.github.io/ananyabalagere/.
  // Change to '/' when switching to a custom domain.
  base: '/ananyabalagere/',
  plugins: [react()],
})
