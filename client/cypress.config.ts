import { defineConfig } from 'cypress'

const vitePreprocessor = require('cypress-vite')

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: 'http://localhost:3000/',

    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
