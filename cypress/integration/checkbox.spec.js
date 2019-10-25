import mount from 'cypress-svelte-unit-test';
import Checkbox from '../../src/components/Inputs/Checkbox/index.svelte';

describe('Checkbox', () => {
  beforeEach(() => {
    mount(Checkbox);
    cy.get('[data-cy=checkbox-input]').as('checkbox-input');
    cy.get('[data-cy=checkbox-label]').as('checkbox-label');
    cy.get('[data-cy=custom-checkbox]').as('custom-checkbox');
  });

  it('Shows default checkbox', () => {
    mount(Checkbox, {
      props: {
        id: 'checkbox-1',
        label: 'Label'
      }
    });

    cy.get('@checkbox-input').should('have.id', 'checkbox-1');
    cy.get('@checkbox-input').should('not.be.disabled');
    cy.get('@checkbox-input').should('not.be.checked');

    cy.get('@checkbox-label').should('have.text', 'Label');
  });

  it('Shows disabled checkbox', () => {
    mount(Checkbox, {
      props: {
        disabled: true
      }
    });

    cy.get('@checkbox-input').should('be.disabled');
  });

  it('Changes state from checked to unchecked', () => {
    cy.get('@checkbox-input').should('not.be.checked');
    cy.get('@custom-checkbox').then($element => {
      const win = $element[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($element[0], 'after');
      const contentValue = after.getPropertyValue('content');
      expect(contentValue).to.eq('none');
    });

    cy.get('@checkbox-input').click();

    cy.get('@checkbox-input').should('be.checked');
    cy.get('@custom-checkbox').then($element => {
      const win = $element[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($element[0], 'after');
      const contentValue = after.getPropertyValue('content');
      expect(contentValue).to.eq('""');
    });

    cy.get('@checkbox-input').click();

    cy.get('@checkbox-input').should('not.be.checked');
    cy.get('@custom-checkbox').then($element => {
      const win = $element[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($element[0], 'after');
      const contentValue = after.getPropertyValue('content');
      expect(contentValue).to.eq('none');
    });

  });
});
