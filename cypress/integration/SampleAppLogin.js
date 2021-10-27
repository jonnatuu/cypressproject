describe('Testing with Cypress', () => {
        // Name of the test
        it('Login to Sample App', () => {

        // Open the Ui Testing playground -website
          cy.visit('http://uitestingplayground.com')

        // Find the Sample App link, click the link
          cy.contains('Sample App').click()

        // Let's be sure, that the right page is opened
          cy.url().should('include', '/sampleapp')

        // No users logged in
          cy.contains('text-info')

        // Type into login input username qwerty
          cy.get('input[name=UserName]').type('qwerty').should('have.value', 'qwerty')

        // Type into password input password pwd
          cy.get('input[name=Password]').type('pwd')

        // Login with Log in -button
          cy.get('button[id=login]').click()

        // Login is succesfull
          cy.contains('text-success')
        })
      })