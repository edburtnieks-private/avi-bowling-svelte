describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Shows homepage', () => {
    cy.percySnapshot('homepage');
  });
});
