it('testa a página da política de privacidade de forma independente',function(){
    cy.visit('./src/privacy.html') // ação
    
    cy.contains('Talking About Testing')
    cy.contains('CAC TAT - Política de privacidade')
})