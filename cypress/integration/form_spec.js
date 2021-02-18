describe('Form Test', () => {
  it('should visit home page', () => {
    cy.visit('/');
  });
});

describe('Form Test', () => {
  it('should type email', () => {
    const email = 'max@mustermann.de';
    cy.visit('/');
    cy.get('form').should('be.visible');
    cy.get('input[name="email"]').type(email).should('have.value', email);
    cy.get('.alert-success').should('not.exist');
  });
});

describe('Form Test', () => {
  it('should fill in all fields', () => {
    const email = 'max@mustermann.de';
    const name = 'Max Mustermann';
    cy.visit('/');
    cy.get('form').should('be.visible');
    cy.get('input[name="email"]').type(email).should('have.value', email);
    cy.get('input[name="name"]').type(name).should('have.value', name);
    cy.get('.alert-success').should('not.exist');
  });
});

describe('Form Test', () => {
  it('should fill in all fields using fixtures', () => {
    cy.fixture('form.fixture').then(({ name, email }) => {
      cy.visit('/');
      cy.get('form').should('be.visible');
      cy.get('input[name="email"]').type(email).should('have.value', email);
      cy.get('input[name="name"]').type(name).should('have.value', name);
      cy.get('.alert-success').should('not.exist');
    });
  });
});