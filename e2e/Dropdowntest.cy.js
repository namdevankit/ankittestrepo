


describe ('dropdown',()=>{


    it.skip ('select class dropdown',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country').select('India').should('have.value','India')


    })

    it ('without select class dropdown',()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')


    })

})