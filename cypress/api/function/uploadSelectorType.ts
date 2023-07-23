declare global {
    namespace Cypress {
        interface Chainable {
            uploadSelectorType: typeof uploadSelectorType;
        }
    }
}

export function uploadSelectorType (elementSelector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    let elementObject: Cypress.Chainable<JQuery<HTMLElement>>;
    (elementSelector.indexOf("//") !== -1) ?
        elementObject = cy.xpath(elementSelector)
        :
        elementObject = cy.get(elementSelector);
    return elementObject;
}