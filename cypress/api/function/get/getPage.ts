import AUTWindow = Cypress.AUTWindow;

declare global {
    namespace Cypress {
        interface Chainable {
            getPage: typeof getPage;
        }
    }
}

export function getPage (url: string): Cypress.Chainable<AUTWindow> {
    return cy.visit(url);
}