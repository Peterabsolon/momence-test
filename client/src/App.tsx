import { QueryClientProvider } from 'react-query'

import { queryClient } from './lib'
import { HomePage } from './pages'
import './App.css'
import { config } from './config'

const apiUrlFromProcess = process.env.API_URL
console.log('apiUrlFromProcess', apiUrlFromProcess)

console.log('from config', config.API_URL)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
