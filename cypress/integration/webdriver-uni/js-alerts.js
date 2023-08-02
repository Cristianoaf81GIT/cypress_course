/// <reference types="cypress"/>


describe('Handle js Alerts', () => {
  
  it('Confirm js alert contains the correct text', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    cy.get('#button1').click()
    // captura eventos js com o cypress
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')
    })
  }) 

})
