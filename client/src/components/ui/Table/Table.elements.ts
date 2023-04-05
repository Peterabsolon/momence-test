import styled, { css } from 'styled-components'

import type { TableProps } from './Table'
import { TableColumnProps } from './Table.types'

export const TableWrapper = styled.table<Pick<TableProps<unknown>, 'minWidth'>>`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  ${({ minWidth }) => css`
    min-width: ${minWidth}px;
  `}
`

export const TableCell = styled.td<Pick<TableColumnProps<unknown>, 'align'>>`
  ${({ align, theme }) => css`
    border-bottom: 1px solid ${theme.colors.borderLight};
    padding: 6px 12px;
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
  padding: 0px 12px 6px;

  ${({ align, width, theme }) => css`
    text-align: ${align};
    width: ${typeof width === 'number' ? `${width}px` : width};
    border-bottom: 1px solid ${theme.colors.borderLight};
  `}

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`

export const TableRowEl = styled.tr`
  &:last-of-type td {
    border-bottom: 0;
  }
`
