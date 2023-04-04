import { ReactNode } from 'react'

import { TableColumnProps } from './Table.types'

export interface TableRowProps<Row extends AnyRecord> {
  row: Row
  columns: TableColumnProps<Row>[]
}

export const TableRow = <Row extends AnyRecord>({ row, columns }: TableRowProps<Row>) => {
  return (
    <tr>
      {columns.map((col) => {
        let value: ReactNode

        if (col.render) {
          value = col.render(row)
        }

        if (col.dataKey) {
          value = row[col.dataKey]
        }

        return <td key={col.label}>{value}</td>
      })}
    </tr>
  )
}
