import { FC, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { api } from '../../api'
import { QUERIES, UNEXPECTED_ERROR } from '../../constants'
import { logger } from '../../lib'

import { ExchangeAmountInput, ExchangeRatesTable } from './components'
import { computeExchangeRate } from './Home.utils'

export const HomePage: FC<any> = () => {
  // ====================================================
  // State
  // ====================================================
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState(0)

  const {
    data = [],
    error,
    isLoading,
  } = useQuery(QUERIES.DAILY_RATES, {
    queryFn: api.getDailyRates,
    onError: logger.error,
    retry: false,
  })

  // ====================================================
  // Computed
  // ====================================================
  const rates = useMemo(() => data.map((rate) => computeExchangeRate(rate, amount)), [amount])

  // ====================================================
  // JSX
  // ====================================================
  if (error) {
    return <div>{UNEXPECTED_ERROR}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ExchangeAmountInput value={input} onChange={setInput} onChangeEnd={setAmount} />

      <ExchangeRatesTable rates={amount ? rates : data} />
    </>
  )
}
