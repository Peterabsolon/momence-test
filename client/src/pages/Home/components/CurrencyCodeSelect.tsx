import { useMemo } from 'react'

import { ExchangeRate } from '~/api'
import { Select, SelectProps } from '~/components'

export interface CurrencyCodeSelectProps extends Omit<SelectProps, 'value'> {
  rates: ExchangeRate[]
  value: string
}

export const CurrencyCodeSelect = ({ rates, ...rest }: CurrencyCodeSelectProps) => {
  const options = useMemo(
    () =>
      rates.map((r) => ({
        label: `${r.country} ${r.currency}`,
        value: r.code,
      })),
    [rates]
  )

  const value = options.find((opt) => opt.value === rest.value)

  return <Select {...rest} value={value} options={options} isClearable />
}
