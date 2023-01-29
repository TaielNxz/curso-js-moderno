/// <reference types="cypress" />


describe('Valida el formulario', () => {

    it('Submit al formulario y mostrar la alerta de error', () => {
        
        cy.visit('http://127.0.0.1:5501/52-Testing-Cypress/index.html');

        cy.get('[data-cy="formulario"]')
            .submit();

        // Seleccionar la alera
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');
     
        // Seleccionar la alera
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger');
            
    });

});