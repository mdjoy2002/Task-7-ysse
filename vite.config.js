import react from '@vitejs/plugin-react'
import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// TASK 7: Match GitHub Pages asset and Router paths to the Task-7 repository.
let buildOutputDirectory

const githubPagesFallback = {
  name: 'github-pages-spa-fallback',
  apply: 'build',
  configResolved(config) {
    buildOutputDirectory = config.build.outDir
  },
  async closeBundle() {
    const outputDirectory = resolve(buildOutputDirectory)
    await copyFile(resolve(outputDirectory, 'index.html'), resolve(outputDirectory, '404.html'))
  },
}

export default defineConfig({
  base: '/Task-7-ysse/',
  plugins: [react(), githubPagesFallback],
})
