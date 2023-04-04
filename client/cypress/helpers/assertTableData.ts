/// <reference types="cypress" />

import { assertTableRow } from './assertTableRow'

export const assertTableData = (selector: string, data: Record<string, any>[]) => {
  Object.values(data).map((row, index) => assertTableRow(selector, index, row))
}
