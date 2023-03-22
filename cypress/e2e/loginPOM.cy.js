/// <reference types="Cypress" />

describe("login test POM", () => {
    beforeEach (() => {
        cy.visit("https://cypress.vivifyscrum-stage.com");
        cy.get('input[type="email"]').type("skola-qa@test.com");
        cy.get('input[type="password"]').type("tester999");
        cy.get('button[type="submit"]').click();
        cy.url().should("not.contain", "/login");
    });

    it("login with valid credentials", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("validLogin");
    });
})
