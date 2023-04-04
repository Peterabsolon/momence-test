import { config } from '../config'

import { ExchangeRate, ExchangeRatesSchema } from './schemas'

const { API_URL } = config

export const getDailyRates = async (): Promise<ExchangeRate[]> => {
  const response = await fetch(`${API_URL}/exchange-rates`).then((r) => r.json())

  ExchangeRatesSchema.parse(response)

  return response
}
