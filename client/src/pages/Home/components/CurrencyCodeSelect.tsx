import { useMemo } from 'react'

import { Select, SelectProps } from '~/components'

import { ExchangeRateRow } from '../Home.types'

export interface CurrencyCodeSelectProps extends Omit<SelectProps, 'value'> {
  rates: ExchangeRateRow[]
  value: string
}

export const CurrencyCodeSelect = ({ rates, ...rest }: CurrencyCodeSelectProps) => {
  const options = useMemo(
    () =>
      rates.map((r) => ({
        label: (
          <>
            {r.country} {r.currency}
          </>
        ),
        value: r.code,
      })),
    [rates]
  )

  const value = options.find((opt) => opt.value === rest.value)

  return <Select {...rest} value={value} options={options} isClearable placeholder="Currency" />
}
