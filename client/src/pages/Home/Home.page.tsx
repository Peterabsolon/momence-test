import { FC, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { useApi } from '~/api'
import { Alert, Card, Title } from '~/components'
import { QUERIES, theme, UNEXPECTED_ERROR } from '~/constants'

import { ExchangeAmountInput, ExchangeRatesTable } from './components'
import { computeExchangeRate } from './Home.utils'

export const HomePage: FC = () => {
  // ====================================================
  // State
  // ====================================================
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState(0)

  const api = useApi()
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(QUERIES.DAILY_RATES, {
    useErrorBoundary: true,
    queryFn: api.getDailyRates,
    retry: false,
  })

  // ====================================================
  // Computed
  // ====================================================
  const rates = useMemo(() => data.map((rate) => computeExchangeRate(rate, amount)), [amount, data])

  // ====================================================
  // Handlers
  // ====================================================
  const handleInputChangeEnd = useCallback((value?: string) => {
    setAmount(Number(value) || 0)
  }, [])

  // ====================================================
  // JSX
  // ====================================================
  if (error) {
    return <Alert level="error" message={UNEXPECTED_ERROR} />
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Title color={theme.palette.bw['800']}>Currency converter</Title>

      <Card mb={2}>
        <ExchangeAmountInput value={input} onChange={setInput} onChangeEnd={handleInputChangeEnd} />
      </Card>

      <Card>
        <ExchangeRatesTable rates={amount ? rates : data} />
      </Card>
    </>
  )
}
