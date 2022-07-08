declare global {
    namespace Cypress {
        interface Chainable {
            clickOnElement: typeof clickOnElement;
        }
    }
}

export const clickOnElement = (elementSelector: string) => {

    return cy.uploadSelectorType(elementSelector).should('exist').scrollIntoView().click();
};