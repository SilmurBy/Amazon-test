declare global {
    namespace Cypress {
        interface Chainable {
            clickOnElement: typeof clickOnElement;
        }
    }
}

export function clickOnElement (elementSelector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.uploadSelectorType(elementSelector).should('exist').scrollIntoView().click();
}