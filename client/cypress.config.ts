import { defineConfig } from 'cypress'

const vitePreprocessor = require('cypress-vite')

export default defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
