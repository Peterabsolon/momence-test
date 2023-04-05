/* eslint-disable */

import { defineConfig } from 'cypress'

// ES5 import not working for whatever reason
const vitePreprocessor = require('cypress-vite')

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: 'http://localhost:3000',

    env: {
      API_URL: 'http://localhost:8080',
    },

    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
