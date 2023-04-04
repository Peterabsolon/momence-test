import { ReactNode } from 'react'

export interface TableColumnProps<Row> {
  // Enables autocomplete based on Row props
  // https://artsy.github.io/blog/2023/03/01/typescript-magic/
  dataKey?: keyof Row | (string & {})

  label: string
  render?: (row: Row) => ReactNode
}
