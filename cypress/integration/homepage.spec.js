describe('Homepage', () => {
  it.skip('Shows homepage', () => {
    cy.visit('http://localhost:3000');

    cy.percySnapshot('homepage');
  });
});
