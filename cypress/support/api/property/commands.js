Cypress.Commands.add('addPropertyViaAPI', (propData) => 
    cy.request({
        url: '/api/properties', 
        method: 'POST',
        body: propData,
    })
);

Cypress.Commands.add('getAllProperties', () => 
    cy.request({
        url: '/api/properties',
        method: 'GET',
    })
);

Cypress.Commands.add('deletePropertyViaAPI', (propId) => 
    cy.request({
        url: '/api/properties/' + propId, 
        method: 'DELETE',
    })
);