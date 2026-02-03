import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Expose on all network interfaces
    strictPort: false, // Allow fallback to next available port (5174) if 5173 is busy
  },
})
