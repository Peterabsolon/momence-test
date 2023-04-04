import { QueryClientProvider } from 'react-query'

import { queryClient } from './lib'
import { HomePage } from './pages'
import './App.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
