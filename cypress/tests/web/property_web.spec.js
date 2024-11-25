import { homeSelectors } from "../../support/web/selectors";

describe("Validate Property Management web functionalities", () => {
    let username, password;

    before(() => {
        cy.fixture('web/user-info').then((props) => {
            username = props.username;
            password = props.password;
        });
    });

    beforeEach(() => {
        cy.loginWith({ username, password });
    });

    it('Create new property', () => {
       cy.createNewProperty('Auto Created Property', 1337);
       cy.get(homeSelectors.propertyCreatedText).should('be.visible');
    });
})