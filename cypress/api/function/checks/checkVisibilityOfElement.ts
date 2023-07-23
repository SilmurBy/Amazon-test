declare global {
    namespace Cypress {
        interface Chainable {
            checkVisibilityOfElement: typeof checkVisibilityOfElement;
        }
    }
}

export function checkVisibilityOfElement (elementSelector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.uploadSelectorType(elementSelector).scrollIntoView().should('be.visible');
}