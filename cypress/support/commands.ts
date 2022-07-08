// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {getPage} from "../api/function/get/getPage";
import {clickOnElement} from "../api/function/actions/clickOnElement";
import {setTextToElement} from "../api/function/actions/setTextToElement";
import {checkVisibilityOfElement} from "../api/function/checks/checkVisibilityOfElement";
import {checkContainsTextInElement} from "../api/function/checks/checkContainsTextInElement";
import {uploadSelectorType} from "../api/function/uploadSelectorType";

// function
Cypress.Commands.add('getPage', getPage);

Cypress.Commands.add('uploadSelectorType', uploadSelectorType);

Cypress.Commands.add('clickOnElement', clickOnElement);

Cypress.Commands.add('setTextToElement', setTextToElement);

Cypress.Commands.add('checkVisibilityOfElement', checkVisibilityOfElement);

Cypress.Commands.add('checkContainsTextInElement', checkContainsTextInElement);
