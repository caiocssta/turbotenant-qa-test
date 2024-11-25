import { homeSelectors } from "../selectors";

Cypress.Commands.add('createNewProperty', (propertyTitle, rentPrice) => {

    cy.get(homeSelectors.addPropButton).click();

    cy.get(homeSelectors.propNameInput).type(propertyTitle);
    cy.get(homeSelectors.propDescriptionInput).type('Timestamp: ' + Date.now());
    cy.get(homeSelectors.propRentInput).type(rentPrice);

    cy.get(homeSelectors.propSubmitButton).click();
})