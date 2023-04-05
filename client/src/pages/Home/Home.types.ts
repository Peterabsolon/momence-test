import { ExchangeRate } from '~/api'

export interface ExchangeRateRow extends ExchangeRate {
  converted?: number
}
