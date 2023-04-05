import { ExchangeRate } from '~/api'

export interface ExchangeRateWithConverted extends ExchangeRate {
  converted?: number
}
