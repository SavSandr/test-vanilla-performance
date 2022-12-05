import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
const PORT = 4000;
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
},
preview: {
    port: PORT,
},
  plugins: [react(),vanillaExtractPlugin()],
  build: {
    outDir: "build",
    assetsDir: "static",
},
})
