import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets/',
      app: '/src/app/',
      pages: '/src/pages/',
      widgets: '/src/widgets/',
      shared: '/src/shared/',
      features: '/src/features/'
    }
  }
})
