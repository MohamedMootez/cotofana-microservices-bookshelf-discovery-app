import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';

dotenv.config(); // Load .env before using process.env

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/auth': {
        target: process.env.VITE_PROXY_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  }

  
});
