import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

import { ExchangeRate, ExchangeRatesSchema } from './schemas'
import { logger } from '../lib'
import { FATAL_ERROR } from '../constants'

export interface ApiContext {
  getDailyRates: () => Promise<ExchangeRate[]>
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
export const ApiContext = createContext<ApiContext>(undefined as any)

export const ApiProvider = (props: PropsWithChildren) => {
  const [apiUrl, setApiUrl] = useState()

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const res = await fetch('/env.js')
        const data = await res.json()
        setApiUrl(data.VITE_API_URL || import.meta.env.VITE_API_URL)
      } catch (err) {
        if (process.env.NODE_ENV === 'production') {
          logger.error(FATAL_ERROR, 'Failed to fetch /env.js in production')
        }
      }
    }

    fetchApiUrl()
  }, [])

  const getDailyRates = async (): Promise<ExchangeRate[]> => {
    const response = await fetch(`${apiUrl}/exchange-rates`).then((r) => r.json())

    ExchangeRatesSchema.parse(response)

    return response
  }

  if (!apiUrl) {
    return null
  }

  return <ApiContext.Provider value={{ getDailyRates }}>{props.children}</ApiContext.Provider>
}

export const useApi = () => useContext(ApiContext)