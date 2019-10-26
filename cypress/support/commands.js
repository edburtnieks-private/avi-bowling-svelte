// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@percy/cypress';

// Asserts custom checkmark as ::after pseudo element content
Cypress.Commands.add('customCheckboxContent', content => {
  cy.get('@custom-checkbox').then($element => {
    const win = $element[0].ownerDocument.defaultView;
    const after = win.getComputedStyle($element[0], 'after');
    const contentValue = after.getPropertyValue('content');
    expect(contentValue).to.eq(content);
  });
});
