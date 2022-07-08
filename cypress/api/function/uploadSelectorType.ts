declare global {
    namespace Cypress {
        interface Chainable {
            uploadSelectorType: typeof uploadSelectorType;
        }
    }
}

export const uploadSelectorType = (elementSelector: string) => {

    let elementObject;

    (elementSelector.indexOf("//") !== -1) ?
        elementObject = cy.xpath(elementSelector)
        :
        elementObject = cy.get(elementSelector);

    return elementObject;
}