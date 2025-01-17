import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/middlemarch-vite-test/',
  plugins: [
    vue(),
    nightwatchPlugin()
  ]
})
