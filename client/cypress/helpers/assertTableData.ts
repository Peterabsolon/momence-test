/// <reference types="cypress" />

import { assertTableRow } from './assertTableRow'

export const assertTableData = (selector: string, data: Record<string, unknown>[]) => {
  Object.values(data).map((row, index) => assertTableRow(selector, index, row))
}
