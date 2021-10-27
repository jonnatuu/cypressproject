describe('Testing with Cypress', () => {
    // Name of the test
    it('Load Delay', () => {
      
    // Open the Ui Testing playground -page
      cy.visit('http://uitestingplayground.com')
    
    // Find the Load Delay link, click the link
      cy.contains('Load Delay').click()

    // Let's be sure, that we're on the right page
      cy.url().should('include', '/loaddelay')

    // Button called "Button Appearing After Delay" is appearing
      cy.contains('Button Appearing After Delay')
    })
  })