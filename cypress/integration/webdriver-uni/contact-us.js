/// <reference types="Cypress"/>

const doc = "https://docs.cypress.io/api/table-of-contents";
const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Test Contact Us form via WebdriverUni", () => {
  let webdriveruniversity = "";

  beforeEach(() => {
    webdriveruniversity = urls[1];
    cy.visit(webdriveruniversity);
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.get('[name="first_name"]').type("João Alexandre");
    cy.get('[name="last_name"]').type("Gomes");
    cy.get('[name="email"]').type("joao@email.com");
    cy.get("textarea.feedback-input").type("test only");
    cy.get('[type="submit"]').click();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("João Alexandre");
    cy.get('[name="last_name"]').type("Gomes");
    cy.get('[type="submit"]').click();
  });
});
