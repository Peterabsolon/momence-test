import { useMemo } from 'react'
import { components, OptionProps, SingleValueProps } from 'react-select'

import { CountryWithFlag, Select, SelectOption, SelectProps } from '~/components'

import { ExchangeRateRow } from '../Home.types'

export interface CurrencyCodeSelectProps extends Omit<SelectProps, 'value'> {
  rates: ExchangeRateRow[]
  value: string
}

export const CurrencyCodeSelect = ({ rates, onChange, ...rest }: CurrencyCodeSelectProps) => {
  const options = useMemo(
    () =>
      rates.map((r) => ({
        data: r,
        label: `${r.country} ${r.currency}`,
        value: r.code,
      })),
    [rates]
  )

  const value = options.find((opt) => opt.value === rest.value)

  return (
    <Select<SelectOption<ExchangeRateRow>>
      value={value}
      options={options}
      onChange={onChange}
      isClearable
      placeholder="Currency"
      data-cy="currency-code-select"
      components={{ Option: CurrencyOption, SingleValue: CurrencyValue }}
    />
  )
}

const CurrencyOption = (props: OptionProps<SelectOption<ExchangeRateRow>>) => {
  if (props.data.data) {
    const { country, currency } = props.data.data

    return (
      <components.Option {...props}>
        <CountryWithFlag country={country} currency={currency} />
      </components.Option>
    )
  }

  return null
}

const CurrencyValue = (props: SingleValueProps<SelectOption<ExchangeRateRow>>) => {
  if (props.data.data) {
    const { country, currency } = props.data.data

    return (
      <components.SingleValue {...props}>
        <CountryWithFlag country={country} currency={currency} />
      </components.SingleValue>
    )
  }

  return null
}
