import styled, { css } from 'styled-components'

import { TableColumnProps } from './Table.types'

export const TableWrapper = styled.table`
  width: 100%;
`

export const TableCell = styled.td<Pick<TableColumnProps<any>, 'align'>>`
  ${({ align }) => css`
    text-align: ${align};
  `}
`

export const TableHeader = styled.td<Pick<TableColumnProps<any>, 'align'>>`
  font-weight: 600;

  ${({ align }) => css`
    text-align: ${align};
  `}
`
