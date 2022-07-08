declare global {
    namespace Cypress {
        interface Chainable {
            setTextToElement: typeof setTextToElement;
        }
    }
}

export const setTextToElement = (elementSelector: string, setText: string) => {

    cy.uploadSelectorType(elementSelector).should('be.visible');
    [...setText].forEach((c) => {
        cy.uploadSelectorType(elementSelector).click();
        cy.uploadSelectorType(elementSelector).type(c, {delay: 0});
    });
};