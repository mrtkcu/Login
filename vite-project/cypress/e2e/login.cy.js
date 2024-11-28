describe("Login Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Navigate to the login page
  });

  it("should display an error message and keep the button disabled when email is incorrect", () => {
    cy.get('[data-cy="email"]').type("invalidemail"); // Type invalid email
    cy.get('[data-cy="password"]').type("validpassword"); // Type valid password
    cy.get('[data-cy="terms"]').check(); // Agree to terms

    cy.get('[data-cy="submit"]').should("be.disabled"); // Submit button should be disabled
  });
  it("should display an error message and keep the button disabled when email and password is incorrect", () => {
    cy.get('[data-cy="email"]').type("invalidemail"); // Type invalid email
    cy.get('[data-cy="password"]').type("123"); // Type invalid password
    cy.get('[data-cy="terms"]').check(); // Agree to terms

    cy.get('[data-cy="submit"]').should("be.disabled"); // Submit button should be disabled
  });

  it("email and password true but didnt check is button disabled ? ", () => {
    cy.get('[data-cy="email"]').type("invalidemail@gmail.com"); // Type invalid email
    cy.get('[data-cy="password"]').type("12345"); // Type invalid password
    cy.get('[data-cy="terms"]').uncheck(); // Agree to terms

    cy.get('[data-cy="submit"]').should("be.disabled"); // Submit button should be disabled
  });
});
