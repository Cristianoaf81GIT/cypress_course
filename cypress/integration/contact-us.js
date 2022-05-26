/// <reference types="Cypress"/>

const doc = "https://docs.cypress.io/api/table-of-contents";
const urls = [
  "http://www.webdriveruniversity.com/",
  "https://www.automationteststore.com/",
];

describe("Test Contact Us form via WebdriverUni", () => {
  let webdriveruniversity = "";

  beforeEach(() => {
    webdriveruniversity = urls[0];
    cy.visit(webdriveruniversity);
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.get("#contact-us > .thumbnail").click();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cypress code
  });
});
