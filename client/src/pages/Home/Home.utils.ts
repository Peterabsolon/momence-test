import { ExchangeRate } from '~/api'

export const computeExchangeRate = (rate: ExchangeRate, amount: number) => ({
  ...rate,
  converted: (amount / rate.rate) * rate.amount,
})

export const isMatchingCode = (rate: ExchangeRate, code: string) => (code ? rate.code === code : true)
