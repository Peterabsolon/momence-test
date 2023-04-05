import { QueryClientProvider } from 'react-query'

import { ApiProvider } from './api'
import { queryClient } from './lib'
import { HomePage } from './pages'
import './App.css'

function App() {
  return (
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ApiProvider>
  )
}

export default App
