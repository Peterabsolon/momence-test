import styled, { css } from 'styled-components'

import { TableColumnProps } from './Table.types'

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`

export const TableCell = styled.td<Pick<TableColumnProps<unknown>, 'align'>>`
  ${({ align }) => css`
    border-bottom: 1px solid #eee;
    padding: 6px 0;
    text-align: ${align};
    vertical-align: middle;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  `}
`

export const TableHeader = styled.th<Pick<TableColumnProps<unknown>, 'align' | 'width'>>`
  font-weight: 600;

  ${({ align, width }) => css`
    text-align: ${align};
    width: ${typeof width === 'number' ? `${width}px` : width};
  `}
`

export const TableRowEl = styled.tr`
  &:last-of-type td {
    border-bottom: 0;
  }
`
