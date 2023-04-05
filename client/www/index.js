/* eslint-disable */

/**
 * Custom Node server to expose (non-secret) environment varibles to client at runtime.
 *
 * This is needed because:
 *  - Vite only outputs static client bundle (/dist)
 *  - The project is deployed through Docker on GCP which injects .env in runtime only (as prescirbed by https://12factor.net/config)
 *
 * The client uses GET /env.js to read the file in ~/api/context.ts
 */

const express = require('express')
const path = require('path')

const app = express()

const VITE_API_URL = process.env.VITE_API_URL
const PORT = process.env.PORT || 8080

const indexFile = path.resolve('dist', 'index.html')

app.use((req, res, next) => {
  const url = req.originalUrl

  if (url.includes('env.js')) {
    res.json({ VITE_API_URL })
    return
  }

  next()
})

app.use(express.static(path.resolve('dist')))
app.get('*', (_req, res) => res.sendFile(indexFile))

app.listen(PORT, () => console.log(`🌍 Server listening on :${PORT}`))
