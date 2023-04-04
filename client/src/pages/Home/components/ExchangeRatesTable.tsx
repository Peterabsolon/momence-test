import { memo } from 'react'
import numeral from 'numeral'

import { Table } from '../../../components'

import { ExchangeRateWithConverted } from '../Home.types'
import { NUMERIC_FORMAT } from '../../../constants'

export interface ExchangeRatesTableProps {
  rates: ExchangeRateWithConverted[]
}

export const ExchangeRatesTable = memo(({ rates }: ExchangeRatesTableProps) => {
  return (
    <Table<ExchangeRateWithConverted>
      rows={rates}
      getKey={(rate) => rate.country}
      columns={[
        { label: 'Country', dataKey: 'country' },
        { label: 'Currency', dataKey: 'currency' },
        { label: 'Amount', dataKey: 'amount' },
        { label: 'Code', dataKey: 'code' },
        { label: 'Rate', render: (row) => numeral(row.rate).format(NUMERIC_FORMAT) },
        { label: 'CZK', render: (row) => numeral(row.converted).format(NUMERIC_FORMAT) },
      ]}
    />
  )
})
