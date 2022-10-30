describe('Test Suite', () => {
  it('Launch the website', () => {
    cy.visit('https://i6.io')
    
    
  })
  it('Click accept button', () => {
    cy.get('a[fs-cc="allow"]').eq(0).click()
    cy.wait(1000)
    
  })
  it('Click about button', () => {
    cy.wait(1000)
    cy.get(':nth-child(16) > .wrapper > .navigation-left-3 > .navigation-menu-3 > [href="/about"]').click()
    
  })

  it('Click contact button', () => {
    cy.wait(1000)
    cy.get('.home-3-integrations-left > .i6-button').click()
    
  })

  

  //it('click about', () => {
  //cy.get('a[href="/about"]').eq(0).click()
//})
  it('Enter Values in the Field', () => {

   cy.get('#First-Name').type('Test', {force: true})
   cy.get('#Last-Name').type('Quality')
   cy.get('#Email').type('aaaa8888')
   cy.get('#Subscribe-to-Email').check()
   cy.get('input[type="submit"]').eq(0).click()
   cy.get('#email-form').within(() => {
   cy.get('#Company-2').invoke('prop', 'validationMessage')
   .should('equal', 'Please fill in this field.')
   })
  })
})
