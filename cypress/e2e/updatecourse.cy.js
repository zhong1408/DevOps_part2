describe('Update Course frontend', () => {
  let baseUrl;

  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);  // Visit the base URL (home page)
    });
  });

  after(() => {
    return cy.task('stopServer'); // Stop the server after the tests are done
  });

  it('should update course details successfully', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();

    // Fill in the form using jsonData values
    cy.get('#Editname').clear().type("FRONTEND");
    cy.get('#Editcode').clear().type("LAP000");
    cy.get('#Editdescription').clear().type("tetsingtesing");


    // Click on the update button
    cy.get('#updateButton').click();

    // Verify the updated course is in the table
    cy.get('#tableContent').contains("FRONTEND").should('exist');
    // Close the modal after the test
    cy.get('#closeModal').click();  // Close the modal after the update
  });

  it('should show error for duplicate course code', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();
    cy.get('#Editname').clear().type("Another Course");
    cy.get('#Editcode').clear().type("UPS123");  // Duplicate course code
    cy.get('#Editdescription').clear().type("Duplicate description");

    cy.get('#updateButton').click();

    // Verify that the duplicate course code is not allowed
    cy.get('#editMessage').should('have.class', 'text-danger')
      .and('contain', 'Course code already exists!');

    // Close the modal after showing the error
    cy.get('#closeModal').click();  // Close the modal after showing the error
  });

  it('should show error for invalid course code', () => {
    cy.visit(baseUrl);
    cy.get('.btn-warning').filter(':contains("Edit")').first().click();

    // Fill in the form with invalid data
    cy.get('#Editname').clear().type('Updated Course Name');
    cy.get('#Editcode').clear().type('ASDF1234');  // Invalid course code
    cy.get('#Editdescription').clear().type('Updated course description');


    cy.get('#updateButton').click();

    cy.get('#editMessage').should('have.class', 'text-danger')
      .and('contain', 'Course code must be 3 uppercase letters followed by 3 numbers!');


    cy.get('#closeModal').click();  // Close the modal after showing the error
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

    // Close the modal after the test
    cy.get('#closeModal').click();  // Close the modal after showing the error
  });
});


