import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pre-bundle embla and related packages to avoid "Outdated Optimize Dep" errors
  optimizeDeps: {
    include: [
      'embla-carousel',
      'embla-carousel-react',
      'embla-carousel-autoplay'
    ]
  },
    base: "/", // or "./" if deploying to a subpath

})