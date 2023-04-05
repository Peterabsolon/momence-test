import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { ApiProvider } from './api'
import { Alert } from './components'
import { theme, UNEXPECTED_ERROR } from './constants'
import { GlobalStyles } from './globalStyles'
import { logger, queryClient } from './lib'
import { HomePage } from './pages'

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />

      <ErrorBoundary
        onError={(e) => logger.error(e?.message)}
        fallbackRender={() => <Alert level="error" mt={5} message={UNEXPECTED_ERROR} />}
      >
        <ApiProvider>
          <QueryClientProvider client={queryClient}>
            <div className="App">
              <HomePage />
            </div>
          </QueryClientProvider>
        </ApiProvider>
      </ErrorBoundary>
    </>
  </ThemeProvider>
)

export default App
