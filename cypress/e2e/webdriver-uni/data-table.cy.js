///  <reference types='cypress'/>

describe("Handling data via webdriveruni", () => {
  
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it.only("Calculate and assert the total age of all users", () => {
    let userDetail = [];
    let num = 0;
    cy.get("#thumbnail-1 td").each(($el,index,_$list) => {
      userDetail[index] = $el.text();
    }).then(() => {
      let i = 0;
      for (i = 0; i < userDetail.length; i++) {
        //cy.log(userDetail[i]);
        if (Number(userDetail[i])) {
          num += Number(userDetail[i]);
        }
      }
      cy.log(`total of ages: ${num}`);
    });
  });
});
