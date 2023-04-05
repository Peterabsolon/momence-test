/// <reference types="cypress" />

import { ROUTES, UNEXPECTED_ERROR } from '../../src/constants'
import rates from '../data/rates'
import { assertTableRow } from '../helpers'

const API_URL = Cypress.env('API_URL')
const RATES_ENDPOINT = `${API_URL}/exchange-rates`

const UI = {
  RATES_TABLE: '[data-cy="exchange-rates-table"]',
  AMOUNT_INPUT: '[data-cy="exchange-amount-input"]',
  CURRENCY_SELECT: '[data-cy="currency-code-select"]',
  SPINNER: '[data-cy="spinner"]',
}

describe('Home', () => {
  it('renders spinner initially', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get(UI.SPINNER).should('exist')
    cy.wait('@getRates')
    cy.get('body').should('contain', 'Australia')
  })

  it('renders unexpected error when data malformed', () => {
    cy.intercept(RATES_ENDPOINT, { body: [{ foo: 'foo' }] }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.wait('@getRates').wait(100)
    cy.get('body').should('contain', UNEXPECTED_ERROR)
  })

  // TODO: Fix after changes to how the ExchangeTable renders data
  // it('renders exchange rates on success', () => {
  //   cy.intercept(RATES_ENDPOINT, { body: rates }).as('getRates')
  //   cy.visit(ROUTES.HOME)
  //   cy.wait('@getRates')
  //   assertTableData(UI.RATES_TABLE, rates)
  // })

  it('computes correct exchange amount for rates with amount 1', () => {
    cy.clock()
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.tick(500)
    cy.get(UI.AMOUNT_INPUT).type('100')
    cy.tick(500).wait(1)

    assertTableRow(UI.RATES_TABLE, 0, {
      currency: 'Australia dollar',
      rate: 14.368,
      amount: 1,
      converted: '6.960',
      code: 'AUD',
    })
  })

  it('computes correct exchange amount for rates with amount 100', () => {
    cy.clock()
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.tick(500)
    cy.get(UI.AMOUNT_INPUT).type('100')
    cy.tick(500).wait(1)

    assertTableRow(UI.RATES_TABLE, 8, {
      currency: 'Hungary forint',
      rate: 6.23,
      amount: 100,
      converted: '1.605k',
      code: 'HUF',
    })
  })

  it('computes correct exchange amount for rates with amount 1000', () => {
    cy.clock()
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.tick(500)
    cy.get(UI.AMOUNT_INPUT).type('100')
    cy.tick(500).wait(1)

    assertTableRow(UI.RATES_TABLE, 12, {
      currency: 'Indonesia rupiah',
      rate: 1.433,
      amount: 1000,
      converted: '69.784k',
      code: 'IDR',
    })
  })

  it('renders only selected rate when some is selected in the dropdown', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.wait('@getRates')
    cy.get(UI.CURRENCY_SELECT).type('au {enter}')
    cy.get(UI.RATES_TABLE).find('tbody').children().should('have.length', 1)
  })
})
