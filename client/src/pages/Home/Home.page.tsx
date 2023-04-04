import { FC, ReactNode } from 'react'
import { useQuery } from 'react-query'

const FAKE_DATA = [
  { id: '1', name: 'Foo' },
  { id: '2', name: 'Bar' },
]

export const HomePage: FC<any> = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery('mydata', () => Promise.resolve(FAKE_DATA))

  if (error && typeof error === 'string') {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
