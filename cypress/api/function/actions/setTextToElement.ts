declare global {
    namespace Cypress {
        interface Chainable {
            setTextToElement: typeof setTextToElement;
        }
    }
}

export function setTextToElement (elementSelector: string, setText: string): void {
    cy.uploadSelectorType(elementSelector).should('be.visible');
    [...setText].forEach((c: string): void => {
        cy.uploadSelectorType(elementSelector).click();
        cy.uploadSelectorType(elementSelector).type(c, {delay: 0});
    });
}