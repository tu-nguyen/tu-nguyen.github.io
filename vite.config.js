import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy  } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy ({
      targets: [
        {
          src: 'v1',
          dest: ''
        },
        {
          src: 'Tu Nguyen Resume.pdf',
          dest: ''
        },
        {
          src: './src/assets/images/projects',
          dest: 'assets/images'
        },
        {
          src: './src/assets/js',
          dest: 'assets/'
        }
      ]
    })
  ],
  base: "./",
  build: {
    outDir: "dist",
  }
})
