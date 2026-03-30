import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

const spa404Plugin = () => ({
  name: 'spa-404',
  closeBundle() {
    copyFileSync(
      resolve('dist', 'index.html'),
      resolve('dist', '404.html')
    )
  }
})

export default defineConfig({
  plugins: [preact(), spa404Plugin()],
  base: '/gulf-developers/',
})
