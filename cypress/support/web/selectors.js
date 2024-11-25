export const loginUrl = 'https://qa-app.dev.turbotenant.com/';

export const loginSelectors = {
    userNameInput: 'input[type="text"]',
    passwordInput: 'input[type="password"]',
    loginButton: 'button[type="submit"]',
}

export const homeSelectors = {
    addPropButton: 'button:contains("Add Property")',
    propNameInput: 'input[placeholder="Title"]',
    propRentInput: 'input[placeholder="Rent"]',
    propDescriptionInput: 'input[placeholder="Description"]',
    propSubmitButton: 'button:contains("Submit")',
    propertyCreatedText: '.message-success',
}
