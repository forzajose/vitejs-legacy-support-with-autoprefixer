import { defineConfig } from "vite";
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    legacy({
      targets: ['ie >= 11']
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
})