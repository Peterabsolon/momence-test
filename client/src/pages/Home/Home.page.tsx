import { FC } from 'react'
import { useQuery } from 'react-query'

import { QUERIES, api } from '../../constants'

const FAKE_DATA = [
  { id: '1', name: 'Foo' },
  { id: '2', name: 'Bar' },
]

export const HomePage: FC<any> = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(QUERIES.DAILY_RATES, api.getDailyRates)

  if (error && typeof error === 'string') {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.country}>{item.country}</div>
      ))}
    </div>
  )
}
