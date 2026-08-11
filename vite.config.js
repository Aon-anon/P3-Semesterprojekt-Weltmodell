import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/P3-Semesterprojekt-Weltmodell/',
  plugins: [react()],
})
