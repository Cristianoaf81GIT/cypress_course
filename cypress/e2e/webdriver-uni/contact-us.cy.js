/// <reference types="Cypress"/>

const doc = "https://docs.cypress.io/api/table-of-contents";
const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Test Contact Us form via WebdriverUni", () => {
  let webdriveruniversity = "";

  /*beforeEach(() => {
    webdriveruniversity = urls[1];
    cy.visit(webdriveruniversity);
  });*/

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit(urls[0]);
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.get('[name="first_name"]').type("João Alexandre");
    cy.get('[name="last_name"]').type("Gomes");
    cy.get('[name="email"]').type("joao@email.com");
    cy.get("textarea.feedback-input").type("test only");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit(urls[0]);
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("João Alexandre");
    cy.get('[name="last_name"]').type("Gomes");
    // cy.get('#contact-us').click({force: true});
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
