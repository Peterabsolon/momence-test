/// <reference types="cypress" />

export const assertTableRow = (selector: string, index: number, data: Record<string, any>) => {
  cy.get(selector).then(($table) => {
    const row = $table.find(`tr:nth-child(${index + 1})`)

    Object.entries(data).map(([key, prop], colIndex) => {
      const column = row.find(`td:nth-child(${colIndex + 1})`)[0]
      if (!column) {
        return
      }

      expect(column.textContent).to.contain(prop)
    })
  })
}
