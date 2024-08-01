
describe ( 'CSSLocater', function() {


it ( 'csslocater', function(){

    cy.visit("https://aem-prod-skyplus6e.goindigo.in/")
    cy.viewport(1800, 1020)

    cy.get('.from-destination .custom-form-control .input-text-field__input').clear().type ("Delhi")
    cy.wait(1000)
    cy.get('.filtered-destination-list .destination-row').click()
    
    
    .pause()

})


})