declare global {
    namespace Cypress {
        interface Chainable {
            checkContainsTextInElement: typeof checkContainsTextInElement;
        }
    }
}

export function checkContainsTextInElement (elementSelector: string, text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.uploadSelectorType(elementSelector).scrollIntoView().should('include.text', text);
}