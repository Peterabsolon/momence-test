import { ReactNode } from 'react'

import { TableColumnProps } from './Table.types'
import { TableCell } from './Table.elements'

export interface TableRowProps<Row extends AnyRecord> {
  row: Row
  columns: TableColumnProps<Row>[]
}

export const TableRow = <Row extends AnyRecord>({ row, columns }: TableRowProps<Row>) => (
  <tr>
    {columns.map(({ align = 'left', ...col }) => {
      let value: ReactNode

      if (col.render) {
        value = col.render(row)
      }

      if (col.dataKey) {
        value = row[col.dataKey]
      }

      return (
        <TableCell key={col.label} align={align}>
          {value}
        </TableCell>
      )
    })}
  </tr>
)
