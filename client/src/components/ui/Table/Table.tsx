import { TableRow } from './TableRow'
import { TableColumnProps } from './Table.types'

export interface TableProps<Row> {
  rows: Row[]
  columns: TableColumnProps<Row>[]
}

export const Table = <Row extends AnyRecord>({ rows, columns }: TableProps<Row>) => {
  return (
    <table>
      <thead>
        {columns.map((col) => (
          <th key={col.label}>{col.label}</th>
        ))}
      </thead>

      <tbody>
        {rows.map((row) => (
          <TableRow row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  )
}
