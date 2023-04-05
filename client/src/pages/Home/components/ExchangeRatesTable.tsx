import numeral from 'numeral'
import { useCallback } from 'react'
import styled from 'styled-components'

import { CountryWithFlag, Table } from '~/components'
import { NUMERIC_FORMAT } from '~/constants'
import { memo } from '~/utils'

import { ExchangeRateRow } from '../Home.types'

export interface ExchangeRatesTableProps {
  rates: ExchangeRateRow[]
}

export const ExchangeRatesTable = memo(({ rates }: ExchangeRatesTableProps) => {
  const getKey = useCallback((rate: ExchangeRateRow) => rate.country, [])

  return (
    <Table<ExchangeRateRow>
      data-cy="exchange-rates-table"
      rows={rates}
      getKey={getKey}
      columns={[
        {
          label: 'Country',
          render: (row) => <CountryWithFlag country={row.country} currency={row.currency} />,
        },
        {
          label: 'Currency',
          dataKey: 'currency',
        },
        {
          label: 'Amount',
          dataKey: 'amount',
        },
        {
          label: 'Code',
          dataKey: 'code',
        },
        {
          label: 'Rate',
          align: 'right',
          render: (row) => numeral(row.rate).format(NUMERIC_FORMAT),
        },
        {
          label: 'Converted',
          align: 'right',
          render: (row) =>
            row.converted ? (
              <ConvertedAmount>
                {numeral(row.converted).format(NUMERIC_FORMAT)} {row.code}
              </ConvertedAmount>
            ) : (
              '—'
            ),
        },
      ]}
    />
  )
})

const ConvertedAmount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`
