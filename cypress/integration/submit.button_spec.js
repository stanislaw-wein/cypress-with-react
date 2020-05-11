describe('Submit Button Test', () => {
  it('should display all fields after pressing the submit button', () => {
    cy.fixture('form.fixture').then(({ name, email }) => {
      cy
      .visit('/')
      .get('form').should('be.visible')
      .get('input[name="email"]').type(email)
      .get('input[name="name"]').type(name)
      .get('.alert-success').should('not.be.visible')
      .get('[data-cy=submit]').click()
      .get('.alert-success').should('be.visible', { timeout: 1000 })
      .get('.email').should('be.visible').and('contain', email)
      .get('.name').should('be.visible').and('contain', name);
    });
  });
});