import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
        REACT_APP_API_BASE_URL: "http://127.0.0.1:8000/api",
    },
},
})
