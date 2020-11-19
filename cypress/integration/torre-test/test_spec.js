/* global describe, it, cy */

describe("torre-test", function () {
  it("para probar si la app funciona", function () {
    cy.visit("/");
  });
  it("navegar a profile", function () {
    cy.visit("/profile/");
    cy.get("div");
  });
  it("navegar a las reglas de la app", function () {
    cy.visit("/instructions/");
    cy.get("div");
  });
  it("navegar con la NavBar a la home desde instructions", function () {
    cy.visit("/instructions/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con la NavBar a la home desde profile", function () {
    cy.visit("/profile/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con el logo a la home", function () {
    cy.visit("/profile/");
    cy.get("a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar a un URL desconocido", function () {
    cy.visit("/gsgsfsf/");
    cy.get("div");
  });
});
