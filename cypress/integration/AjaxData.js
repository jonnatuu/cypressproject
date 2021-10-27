describe('Testing with Cypress', () => {
    // Name of the test
    it('Do AJAX Data request', () => {
      
    // Open the Ui Testing playground -page
      cy.visit('http://uitestingplayground.com')

    
    
    // Find the AJAX Data link, click the link
      cy.contains('AJAX Data').click()

    // Let's be sure, that we're on the right page
      cy.url().should('include', '/ajax')

/*      
    // Type into login input username qwerty
      cy.get('input[name=UserName]').type('qwerty').should('have.value', 'qwerty')

    // Type into password input password pwd
      cy.get('input[name=Password]').type('pwd')

    // Login with Log in -button
      cy.get('button[id=login]').click()

    // Login is succesfull
      cy.contains('text-success') 

    */
    })
  })