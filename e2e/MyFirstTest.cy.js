

describe('My First Test', function()  {
    it('test1', function()  {

      cy.visit("https://opensource-demo.orangehrmlive.com")
      cy.title().should('eq','OrangeHRM')

    })

    it('test1', function()  {

        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq','OrangeHRM123')
  
      })
  })