

describe('LocalCSSLocators', ()=> {

    it('localcss', ()=> {

        cy.visit("/page/index.html")
        cy.get('#title').contains('Login')
        cy.get('#uid').type('myusername')
        cy.get('#password').type('mypassword')
        cy.get('#click').click()
        cy.url().should('include','/page/dashboard.html')
        cy.get('#amount').click()

    })



})