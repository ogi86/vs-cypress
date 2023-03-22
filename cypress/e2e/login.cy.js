/// <reference types="Cypress" />

describe("Login test", () => {
    it("Login valid user", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com");
        cy.get('input[type="email"]').type("skola-qa@test.com");
        cy.get('input[type="password"]').type("tester999");
        cy.get('button[type="submit"]').click();
        cy.url().should("not.contain", "/login");
    });

})
