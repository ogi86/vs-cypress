/// <reference types="Cypress" />

describe("Add board tests", () => {
    beforeEach (() => {
        cy.visit("https://cypress.vivifyscrum-stage.com");
        cy.get('input[type="email"]').type("skola-qa@test.com");
        cy.get('input[type="password"]').type("tester999");
        cy.get('button[type="submit"]').click();
        cy.url().should("not.contain", "/login");
    });

    it("Add new board", () => {
        cy.get("a[href='/organizations/27494/boards']")
        .contains("My Organization")
        .click();
        
        
    });
});

