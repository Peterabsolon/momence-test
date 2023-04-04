import { FC } from 'react'
import { useQuery } from 'react-query'

import { api } from '../../api'
import { QUERIES } from '../../constants'
import { logger } from '../../lib'
import { UNEXPECTED_ERROR } from '../../constants/errors'

export const HomePage: FC<any> = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(QUERIES.DAILY_RATES, {
    queryFn: api.getDailyRates,
    onError: logger.error,
    retry: false,
  })

  if (error) {
    return <div>{UNEXPECTED_ERROR}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.country}>{item.country}</div>
      ))}
    </div>
  )
}
