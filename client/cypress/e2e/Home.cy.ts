/// <reference types="cypress" />

import { ROUTES } from '../../src/constants'

describe('template spec', () => {
  it('passes', () => {
    cy.visit(ROUTES.HOME)
  })
})
