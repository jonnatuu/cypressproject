// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Testataan paljuoravan sivuja', () => {
      cy.visit('https://www.paljuorava.fi')

      cy.contains('Yhteystiedot').click()
      cy.url().should('include', 'yhteystiedot')

      cy.get('validates-as-required')
      .type('Jonnan testi')

    })
  })