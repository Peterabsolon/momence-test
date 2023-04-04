import * as z from 'zod'

export const ExchangeRateSchema = z.object({
  country: z.string(),
  currency: z.string(),
  amount: z.number(),
  code: z.string(),
  rate: z.number(),
})

export const ExchangeRatesSchema = z.array(ExchangeRateSchema)

export type ExchangeRate = z.infer<typeof ExchangeRateSchema>
