describe('Testing with Cypress', () => {
    // Name of the test
    it('Do AJAX Data request', () => {
      
    // Open the Ui Testing playground -page
      cy.visit('http://uitestingplayground.com')
    
    // Find the AJAX Data link, click the link
      cy.contains('AJAX Data').click()

    // Let's be sure, that we're on the right page
      cy.url().should('include', '/ajax')

    // Click AJAX request button, and wait for 16s data to be loaded
      cy.get('#ajaxButton').should('contain', 'Button').click().wait(16000)

    // Check, that data is loaded with AJAX get request
      cy.contains('bg-success')
    })
  })