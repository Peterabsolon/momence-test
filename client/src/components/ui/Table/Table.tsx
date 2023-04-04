import { TableRow } from './TableRow'
import { TableColumnProps } from './Table.types'

export interface TableProps<Row> {
  /**
   * The data to render
   */
  rows: Row[]

  /**
   * Columns definitions
   */
  columns: TableColumnProps<Row>[]

  /**
   * Function to extract the key from a row
   */
  getKey?: (row: Row) => string
}

export const Table = <Row extends AnyRecord>({ rows, columns, getKey = (row) => row.id }: TableProps<Row>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.label}>{col.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <TableRow key={getKey(row)} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  )
}
