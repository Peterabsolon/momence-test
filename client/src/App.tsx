import './App.css'

import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'

import { ApiProvider } from './api'
import { Alert } from './components'
import { UNEXPECTED_ERROR } from './constants'
import { logger, queryClient } from './lib'
import { HomePage } from './pages'

const App = () => (
  <ErrorBoundary
    onError={(e) => logger.error(e.message)}
    fallbackRender={() => <Alert level="error" message={UNEXPECTED_ERROR} />}
  >
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ApiProvider>
  </ErrorBoundary>
)

export default App
