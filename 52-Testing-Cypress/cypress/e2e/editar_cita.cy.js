/// <reference types="cypress" />


describe('Llena los campos para una nueva cita y la edita', () => {
    it('campos nueva cita', () => {

        cy.visit('http://127.0.0.1:5501/52-Testing-Cypress/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Camila');

        cy.get('[data-cy="propietario-input"]')
            .type('Taiel');

        cy.get('[data-cy="telefono-input"]')
            .type('452361236');

        cy.get('[data-cy="fecha-input"]')
            .type('2022-05-04');
            
        cy.get('[data-cy="hora-input"]')
            .type('13:50');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('solo come y duerme');

        cy.get('[data-cy="submit-cita"]')
            .click();

        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

        // Seleccionar la alera
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
     
        // Seleccionar la alera
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');

    });

    it('Edita la cita', () => {
        
        cy.get('[data-cy="btn-editar"]')
            .click()

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nuevo Camila');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');
    });

});