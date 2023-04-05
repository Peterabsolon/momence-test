import { ExchangeRate } from '~/api'

import { ExchangeRateWithConverted } from './Home.types'

export const computeExchangeRate = (rate: ExchangeRate, amount: number): ExchangeRateWithConverted => ({
  ...rate,
  converted: (amount / rate.rate) * rate.amount,
})

export const isMatchingCode = (rate: ExchangeRate, code: string) => (code ? rate.code === code : true)
