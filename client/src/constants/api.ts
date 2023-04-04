import { ExchangeRate } from './api.types'

// https://vitejs.dev/guide/env-and-mode.html#env-variables
const API_URL = import.meta.env.VITE_API_URL

export const getDailyRates = (): Promise<ExchangeRate[]> =>
  fetch(`${API_URL}/exchange-rates`).then((res) => res.json())
