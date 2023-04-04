/// <reference types="cypress" />

import { ROUTES, UNEXPECTED_ERROR } from '../../src/constants'
import { config } from '../../src/config'

import rates from '../data/rates'
import { assertTableData } from '../helpers'

const RATES_ENDPOINT = `${config.API_URL}/exchange-rates`

const RATES_TABLE_SELECTOR = '[data-cy="exchange-rates-table"]'

describe('Home', () => {
  it('renders spinner initially', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
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

  it('renders exchange rates on success', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates }).as('getRates')
    cy.visit(ROUTES.HOME)
    assertTableData(RATES_TABLE_SELECTOR, rates)
  })
})
