/// <reference types="cypress" />

import { ROUTES, UNEXPECTED_ERROR } from '../../src/constants'
import { config } from '../../src/config'

import rates from '../data/rates'
import { assertTableData, assertTableRow } from '../helpers'

const RATES_ENDPOINT = `${config.API_URL}/exchange-rates`

const UI = {
  RATES_TABLE: '[data-cy="exchange-rates-table"]',
  AMOUNT_INPUT: '[data-cy="exchange-amount-input"]',
}

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
    cy.assertTableData(UI.RATES_TABLE, rates)
  })

  // TODO: remove wait
  it('computes correct exchange amount for rates with amount 1', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get(UI.AMOUNT_INPUT).type('100').wait(500)
    cy.assertTableRow(UI.RATES_TABLE, 0, { ...rates[0], CZK: '6.902' })
  })

  // TODO: remove wait
  it('computes correct exchange amount for rates with amount 100', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get(UI.AMOUNT_INPUT).type('100').wait(500)
    cy.assertTableRow(UI.RATES_TABLE, 8, { ...rates[8], CZK: '1609.010' })
  })

  // TODO: remove wait
  it('computes correct exchange amount for rates with amount 1000', () => {
    cy.intercept(RATES_ENDPOINT, { body: rates, delay: 100 }).as('getRates')
    cy.visit(ROUTES.HOME)
    cy.get(UI.AMOUNT_INPUT).type('100').wait(500)
    cy.assertTableRow(UI.RATES_TABLE, 12, { ...rates[12], CZK: '69348.128' })
  })
})
