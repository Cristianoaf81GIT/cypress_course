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
  
  it('Validate js confirm alert box works correctly when clicking ok', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    cy.get('#button4').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.contains('Press a button!')
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')    
  })

   it('Validate js confirm alert box works correctly when clicking ok', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    cy.get('#button4').click()
    cy.on('window:confirm', cy.stub().returns(false)) 
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')    
  })

})
