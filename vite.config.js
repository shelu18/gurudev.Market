import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <repo-name> with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/shelu18/gurudev.Market.git',
})
