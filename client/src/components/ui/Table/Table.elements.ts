import styled, { css } from 'styled-components'

import { TableColumnProps } from './Table.types'

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableCell = styled.td<Pick<TableColumnProps<unknown>, 'align'>>`
  ${({ align }) => css`
    border-bottom: 1px solid #eee;
    padding: 4px 0;
    text-align: ${align};

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  `}
`

export const TableHeader = styled.th<Pick<TableColumnProps<unknown>, 'align'>>`
  font-weight: 600;

  ${({ align }) => css`
    text-align: ${align};
  `}
`

export const TableRowEl = styled.tr`
  &:last-of-type td {
    border-bottom: 0;
  }
`
