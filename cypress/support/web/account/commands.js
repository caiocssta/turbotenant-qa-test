import { homeSelectors, loginSelectors, loginUrl } from "../selectors";

Cypress.Commands.add('loginWith', ({ username, password }) => {
    cy.visit(loginUrl);

    cy.intercept('/api/properties').as('properties')
    
    cy.get(loginSelectors.userNameInput).type(username);
    cy.get(loginSelectors.passwordInput).type(password);

    cy.get(loginSelectors.loginButton).click();

    cy.wait('@properties');
})

