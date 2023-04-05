import { ReactNode } from 'react'

export interface TableColumnProps<Row> {
  /**
   * Render key, used to extract data from row
   */
  dataKey?: keyof Row

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
