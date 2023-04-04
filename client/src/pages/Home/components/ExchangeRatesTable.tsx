import { ExchangeRate } from '../../../api'
import { Table } from '../../../components'

export interface ExchangeRatesTableProps {
  rates: ExchangeRate[]
}

export const ExchangeRatesTable = ({ rates }: ExchangeRatesTableProps) => {
  return (
    <Table<ExchangeRate>
      rows={rates}
      columns={[
        { label: 'Country', dataKey: 'country' },
        { label: 'Currency', dataKey: 'currency' },
        { label: 'Amount', dataKey: 'amount' },
        { label: 'Code', dataKey: 'code' },
        { label: 'Rate', dataKey: 'rate' },
      ]}
    />
  )
}
