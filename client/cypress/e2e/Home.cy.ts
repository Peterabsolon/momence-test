/// <reference types="cypress" />

import { ROUTES, UNEXPECTED_ERROR } from '../../src/constants'
import { config } from '../../src/config'

const RATES_ENDPOINT = `${config.API_URL}/exchange-rates`

describe('Home', () => {
  it('renders spinner initially', () => {
    cy.intercept(RATES_ENDPOINT, { fixture: 'rates.json', delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get('body').should('contain', 'Loading...')
    cy.wait('@getRates')
    cy.get('body').should('contain', 'Australia')
  })

  it('renders unexpected error on failure', () => {
    cy.intercept(RATES_ENDPOINT, { body: [{ foo: 'foo' }] }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get('body').should('contain', UNEXPECTED_ERROR)
  })

  it('renders data', () => {
    cy.intercept(RATES_ENDPOINT, { fixture: 'rates.json' }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get('body').should('contain', 'Australia')
  })
})
