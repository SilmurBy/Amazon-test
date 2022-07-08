declare global {
    namespace Cypress {
        interface Chainable {
            checkContainsTextInElement: typeof checkContainsTextInElement;
        }
    }
}

export const checkContainsTextInElement = (elementSelector: string, text: string) => {

    return cy.uploadSelectorType(elementSelector).should('exist').scrollIntoView().should('contain.text', text);
};