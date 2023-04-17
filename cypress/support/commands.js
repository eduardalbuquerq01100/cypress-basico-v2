Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Albuquerque')
    cy.get('#email').type('maria@email.com')
    cy.get('#open-text-area').type('tes')
    cy.contains('button','Enviar').click()})