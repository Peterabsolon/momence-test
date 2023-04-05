import numeral from 'numeral'
import { useCallback } from 'react'
import styled from 'styled-components'

import { Box, Card, CountryWithFlag, HorizontalScroll, Table } from '~/components'
import { NUMERIC_FORMAT } from '~/constants'
import { memo } from '~/utils'

import { ExchangeRateRow } from '../Home.types'

export interface ExchangeRatesTableProps {
  rates: ExchangeRateRow[]
}

export const ExchangeRatesTable = memo(({ rates }: ExchangeRatesTableProps) => {
  const getKey = useCallback((rate: ExchangeRateRow) => rate.country, [])

  return (
    <HorizontalScroll>
      <Box minWidth={768}>
        <Card>
          <Table<ExchangeRateRow>
            data-cy="exchange-rates-table"
            rows={rates}
            getKey={getKey}
            minWidth={768 - 16}
            columns={[
              {
                label: 'Currency',
                width: 250,
                render: (row) => <CountryWithFlag country={row.country} currency={row.currency} />,
              },
              {
                label: 'Rate',
                align: 'right',
                render: (row) => numeral(row.rate).format(NUMERIC_FORMAT),
              },
              {
                label: 'Amount',
                width: 160,
                dataKey: 'amount',
              },
              {
                label: 'Converted',
                align: 'right',
                render: (row) =>
                  row.converted ? (
                    <ConvertedAmount>{numeral(row.converted).format(NUMERIC_FORMAT)}</ConvertedAmount>
                  ) : (
                    '—'
                  ),
              },
              {
                label: 'Code',
                width: 60,
                dataKey: 'code',
              },
            ]}
          />
        </Card>
      </Box>
    </HorizontalScroll>
  )
})

const ConvertedAmount = styled.span`
  color: ${({ theme }) => theme.colors.focus};
  font-weight: 600;
`
