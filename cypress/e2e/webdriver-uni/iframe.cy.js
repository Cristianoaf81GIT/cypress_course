///  <reference types='cypress'/>

//

describe("Handling IFrame and Modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      // console.log(text);
      expect(text.length).to.gt(0);
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
      );
    });

    cy.get("@modal").contains("Close").as("closeModal");
    cy.get("@closeModal").click({ force: true });
  });
});
