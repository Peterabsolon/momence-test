import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

import { FATAL_ERROR } from '~/constants'
import { logger } from '~/lib'

import { ExchangeRate, schemas } from './schemas'

const API_URL_FROM_ENV = import.meta.env.VITE_API_URL
const IS_DEV = import.meta.env.DEV
const IS_PROD = import.meta.env.PROD

export interface ApiContext {
  getDailyRates: () => Promise<ExchangeRate[]>
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ApiContext = createContext<ApiContext>(undefined as any)

export const ApiProvider = (props: PropsWithChildren) => {
  // ====================================================
  // State
  // ====================================================
  const [apiUrl, setApiUrl] = useState()

  // ====================================================
  // Handlers
  // ====================================================
  const getDailyRates = async (): Promise<ExchangeRate[]> => {
    const res = await fetch(`${apiUrl}/exchange-rates`).then((r) => r.json())
    schemas.exchangeRates.parse(res)
    return res
  }

  // ====================================================
  // Effects
  // ====================================================
  // Fetch API_URL from the server, use .env in development
  useEffect(() => {
    const fetchApiUrl = async () => {
      if (IS_DEV) {
        setApiUrl(API_URL_FROM_ENV)
        return
      }

      try {
        const res = await fetch('/env.js')
        const data = await res.json()
        setApiUrl(data.VITE_API_URL)
      } catch (err) {
        console.log({ err })

        if (IS_PROD) {
          logger.error(FATAL_ERROR, 'Failed to fetch /env.js in production')
        }
      }
    }

    fetchApiUrl()
  }, [])

  // ====================================================
  // JSX
  // ====================================================
  console.log('apiUrl', apiUrl)

  // Wait until we resolve API_URL
  if (!apiUrl) {
    return null
  }

  return <ApiContext.Provider value={{ getDailyRates }}>{props.children}</ApiContext.Provider>
}

export const useApi = () => useContext(ApiContext)
