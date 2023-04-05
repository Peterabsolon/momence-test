const logToExternalService = (_err?: unknown, _message?: string) => {
  // TODO: Log to some external aggregator like Sentry.io
}

export const logger = {
  info: (err?: unknown, message?: string): void => {
    logToExternalService(err, message)
    console.info('Info:', err, message)
  },

  log: (err?: unknown, message?: string): void => {
    logToExternalService(err, message)
    console.log('Log:', err, message)
  },

  warn: (err?: unknown, message?: string): void => {
    logToExternalService(err, message)
    console.warn('Warning:', err, message)
  },

  error: (err?: unknown, message?: string): void => {
    logToExternalService(err, message)
    console.error('Error:', err, message)
  },
}
