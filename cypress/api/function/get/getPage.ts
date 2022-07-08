declare global {
    namespace Cypress {
        interface Chainable {
            getPage: typeof getPage;
        }
    }
}

export const getPage = (url: string) => {
    return cy.visit(url);
};