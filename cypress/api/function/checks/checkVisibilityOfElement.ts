declare global {
    namespace Cypress {
        interface Chainable {
            checkVisibilityOfElement: typeof checkVisibilityOfElement;
        }
    }
}

export const checkVisibilityOfElement = (elementSelector: string) => {

    return cy.uploadSelectorType(elementSelector).should('exist').scrollIntoView().should('be.visible');
};