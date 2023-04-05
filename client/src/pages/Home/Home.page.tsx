import { FC, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { MultiValue, SingleValue } from 'react-select'

import { useApi } from '~/api'
import { Alert, Box, Card, Flex, SelectOption, Spinner, Title } from '~/components'
import { QUERIES, theme, UNEXPECTED_ERROR } from '~/constants'

import { CurrencyCodeSelect, ExchangeAmountInput, ExchangeRatesTable } from './components'
import { computeExchangeRate, isMatchingCode } from './Home.utils'

export const HomePage: FC = () => {
  // ====================================================
  // State
  // ====================================================
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState(0)
  const [code, setCode] = useState('')

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
  const rates = useMemo(
    () => data.filter((rate) => isMatchingCode(rate, code)).map((rate) => computeExchangeRate(rate, amount)),
    [amount, code, data]
  )

  // ====================================================
  // Handlers
  // ====================================================
  const handleInputChangeEnd = useCallback((value?: string) => {
    setAmount(Number(value) || 0)
  }, [])

  const handleCurrencyCodeChange = useCallback((option: SingleValue<SelectOption> | MultiValue<SelectOption>) => {
    if (!Array.isArray(option) && option && 'value' in option) {
      setCode(option.value)
    } else {
      setCode('')
    }
  }, [])

  // ====================================================
  // JSX
  // ====================================================
  const title = <Title color={theme.palette.bw['800']}>Currency converter</Title>

  if (error) {
    return <Alert level="error" message={UNEXPECTED_ERROR} />
  }

  if (isLoading) {
    return (
      <>
        {title}
        <Spinner m="20rem auto" />
      </>
    )
  }

  return (
    <>
      {title}

      <Card mb={2}>
        <Flex gap={16}>
          <Box flex="1 0 0" minWidth={0}>
            <ExchangeAmountInput value={input} onChange={setInput} onChangeEnd={handleInputChangeEnd} />
          </Box>

          <Box flex="1 0 0" minWidth={0}>
            <CurrencyCodeSelect value={code} onChange={handleCurrencyCodeChange} rates={rates} />
          </Box>
        </Flex>
      </Card>

      <Card>
        <ExchangeRatesTable rates={rates} />
      </Card>
    </>
  )
}
