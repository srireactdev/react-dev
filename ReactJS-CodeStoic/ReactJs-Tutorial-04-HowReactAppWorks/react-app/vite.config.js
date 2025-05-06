import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['all', // Allow all hosts
      "5173-srireactdev-reactdev-lxd8iup6e2l.ws-us118.gitpod.io"
    ]
  }
})
