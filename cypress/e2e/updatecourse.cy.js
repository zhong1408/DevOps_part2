describe('Update Course frontend', () => {
  let baseUrl;

  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url; 
      cy.visit(baseUrl);  
    });
  });

  after(() => {
    return cy.task('stopServer'); 
  });

  it('should update course details successfully', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();

    cy.get('#Editname').clear().type("FRONTEND");
    cy.get('#Editcode').clear().type("LAP000");
    cy.get('#Editdescription').clear().type("tetsingtesing");

    cy.get('#updateButton').click();

    cy.get('#tableContent').contains("FRONTEND").should('exist');
    cy.get('#closeModal').click();  
  });

  it('should show error for duplicate course code', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();
    cy.get('#Editname').clear().type("Another Course");
    cy.get('#Editcode').clear().type("UPS123");  // Duplicate course code
    cy.get('#Editdescription').clear().type("Duplicate description");

    cy.get('#updateButton').click();

    cy.get('#editMessage').should('have.class', 'text-danger')
      .and('contain', 'Course code already exists!');

    cy.get('#closeModal').click();  
  });

  it('should show error for invalid course code', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();

    cy.get('#Editname').clear().type('Updated Course Name');
    cy.get('#Editcode').clear().type('ASDF1234');  // Invalid course code
    cy.get('#Editdescription').clear().type('Updated course description');


    cy.get('#updateButton').click();

    cy.get('#editMessage').should('have.class', 'text-danger')
      .and('contain', 'Course code must be 3 uppercase letters followed by 3 numbers!');


    cy.get('#closeModal').click(); 
  });


  it('should show error when form fields are empty', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning', { timeout: 10000 }).should('be.visible').first().click();

    cy.get('#Editname').clear();
    cy.get('#Editcode').clear();
    cy.get('#Editdescription').clear();


    cy.get('#updateButton').click();

    cy.get('#editMessage').should('have.class', 'text-danger')
      .and('contain', 'All fields are required!');

    cy.get('#closeModal').click(); 
  });
});


