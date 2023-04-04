import { memo } from 'react'

import { ExchangeRate } from '../../../api'
import { Table } from '../../../components'

export interface ExchangeRatesTableProps {
  rates: ExchangeRate[]
}

export const ExchangeRatesTable = memo(({ rates }: ExchangeRatesTableProps) => {
  return (
    <Table<ExchangeRate>
      rows={rates}
      getKey={(rate) => rate.country}
      columns={[
        { label: 'Country', dataKey: 'country' },
        { label: 'Currency', dataKey: 'currency' },
        { label: 'Amount', dataKey: 'amount' },
        { label: 'Code', dataKey: 'code' },
        { label: 'Rate', dataKey: 'rate' },
        { label: 'CZK', dataKey: 'converted' },
      ]}
    />
  )
})
