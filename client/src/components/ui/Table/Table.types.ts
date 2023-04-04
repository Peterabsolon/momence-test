import { ReactNode } from 'react'

export interface TableColumnProps<Row> {
  /**
   * Render key, used to extract data from row.
   * Can be a key from row or any string (the typing here enables autocomplete)
   * https://artsy.github.io/blog/2023/03/01/typescript-magic/
   */
  dataKey?: keyof Row | (string & {})

  /**
   * The column label
   */
  label: string

  /**
   * Custom row renderer
   */
  render?: (row: Row) => ReactNode

  /**
   * Which side should the cell content align to
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'
}
