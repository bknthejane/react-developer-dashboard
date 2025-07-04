import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    "process.env.TOKEN":JSON.stringify(process.env.VITE_TOKEN)
  }
})
