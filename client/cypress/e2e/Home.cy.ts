/// <reference types="cypress" />

import { ROUTES } from '../../src/constants'
import { config } from '../../src/config'

describe('Home', () => {
  it('fetches exchange data on load', () => {
    cy.intercept(`${config.API_URL}/exchange-rates`, { body: [] })
    cy.visit(ROUTES.HOME)
    cy.get('body').should('include', 'Hallo')
  })
})
