/// <reference types="cypress"/>

describe("Verify checkboxes via webdriveruni", () => {
  it("check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    //    cy.get('#checkboxes > :nth-child(1) > input').check()
    //    cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    //    cy.get('#checkboxes > :nth-child(3) > input').should('not.be.checked')

    cy.get("#checkboxes > :nth-child(3) > input").as("option-1");
    // cy.get('@option-1').check()
    cy.get("@option-1").check().should("be.checked");
  });

  it("uncheck and validate option3 checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get(":nth-child(5) > input").as("option-3").uncheck();
    cy.get("@option-3").should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get('[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
