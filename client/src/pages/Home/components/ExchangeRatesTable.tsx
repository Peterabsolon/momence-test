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
      <Box minWidth={1024}>
        <Card>
          <Table<ExchangeRateRow>
            data-cy="exchange-rates-table"
            rows={rates}
            getKey={getKey}
            minWidth={960}
            columns={[
              {
                label: 'Country',
                width: 240,
                render: (row) => <CountryWithFlag country={row.country} currency={row.currency} />,
              },
              {
                label: 'Currency',
                width: 160,
                dataKey: 'currency',
              },
              {
                label: 'Amount',
                width: 160,
                dataKey: 'amount',
              },
              {
                label: 'Code',
                width: 160,
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
        </Card>
      </Box>
    </HorizontalScroll>
  )
})

const ConvertedAmount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`
