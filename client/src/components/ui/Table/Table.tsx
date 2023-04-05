import { memo } from '~/utils'

import { TableHeader, TableWrapper } from './Table.elements'
import { TableColumnProps } from './Table.types'
import { TableRow } from './TableRow'

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

const TableComp = <Row extends AnyRecord>({ rows, columns, getKey = (row) => row.id, ...rest }: TableProps<Row>) => (
  <TableWrapper {...rest}>
    <thead>
      <tr>
        {columns.map(({ align = 'left', ...col }) => (
          <TableHeader key={col.label} align={align}>
            {col.label}
          </TableHeader>
        ))}
      </tr>
    </thead>

    <tbody>
      {rows.map((row) => (
        <TableRow key={getKey(row)} row={row} columns={columns} />
      ))}
    </tbody>
  </TableWrapper>
)

export const Table = memo(TableComp)
