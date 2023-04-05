import numeral from 'numeral'
import { useCallback } from 'react'

import { Table } from '../../../components'
import { NUMERIC_FORMAT } from '../../../constants'
import { memo } from '../../../utils'
import { ExchangeRateWithConverted } from '../Home.types'

export interface ExchangeRatesTableProps {
  rates: ExchangeRateWithConverted[]
}

export const ExchangeRatesTable = memo(({ rates }: ExchangeRatesTableProps) => {
  const getKey = useCallback((rate: ExchangeRateWithConverted) => rate.country, [])

  return (
    <Table<ExchangeRateWithConverted>
      data-cy="exchange-rates-table"
      rows={rates}
      getKey={getKey}
      columns={[
        { label: 'Country', dataKey: 'country' },
        { label: 'Currency', dataKey: 'currency' },
        { label: 'Amount', dataKey: 'amount' },
        { label: 'Code', dataKey: 'code' },
        { label: 'Rate', align: 'right', render: (row) => numeral(row.rate).format(NUMERIC_FORMAT) },
        { label: 'CZK', align: 'right', render: (row) => numeral(row.converted).format(NUMERIC_FORMAT) },
      ]}
    />
  )
})
