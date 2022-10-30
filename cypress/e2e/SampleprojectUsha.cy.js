describe('Test Suite1', () => {

  describe('Test1 - Contactus Page',() => {

    it('Test1 - Contact us page - Valid test', () => {
      cy.log ('Launch website')
      cy.visit('https://i6.io')  
      //click about button
      cy.log('Mainpage - Select cookies')
      cy.get('.fs-cc-banner_button').should('have.text',"Accept").click()
      //cy.get('a[fs-cc="allow"]').should('have.text',"AcceptAllow all cookies").click()
      //eq(0).click()
      cy.log('Cookies accepted')

      cy.log('click about link')
      cy.get(':nth-child(16) > .wrapper > .navigation-left-3 > .navigation-menu-3 > [href="/about"]').click()
      cy.log('About link clicked') 

      cy.log('Click contact us page button')
      cy.get('.home-3-integrations-left > .i6-button').click()
      cy.log('Contact us page button clicked')

      cy.log('Contact us Page - Enter fields')
      cy.get('#First-Name').type('Test', {force: true})
      cy.get('#Last-Name').type('Quality')
      cy.get('#Email').type('aaaa8888')
      cy.get('#Subscribe-to-Email').check()
      cy.get('input[type="submit"]').eq(0).click()
      cy.get('#email-form').within(() => {
      cy.get('#Company-2').invoke('prop', 'validationMessage')
      .should('equal', 'Please fill in this field.')
      cy.log('Contact us page - Errors validation')
      })   
    })//it('Valid test', () => {  

      it('Test2 - Contact us page - Invalid test', () => {
        cy.log ('Launch website')
        cy.visit('https://i6.io')  
        //click about button
        cy.log('Mainpage - Select cookies')
        cy.get('.fs-cc-banner_button').should('have.text',"Accept").click()
        //cy.get('a[fs-cc="allow"]').should('have.text',"AcceptAllow all cookies").click()
        //eq(0).click()
        cy.log('Cookies accepted')
  
        cy.log('click about link')
        cy.get(':nth-child(16) > .wrapper > .navigation-left-3 > .navigation-menu-3 > [href="/about"]').click()
        cy.log('About link clicked') 
  
        cy.log('Click contact us page button')
        cy.get('.home-3-integrations-left > .i6-button').click()
        cy.log('Contact us page button clicked')
  
        cy.log('Contact us Page - Enter fields')
        cy.get('#First-Name').type('Test', {force: true})
        cy.get('#Last-Name').type('Quality')
        cy.get('#Email').type('aaaa8888')
        cy.get('#Subscribe-to-Email').check()
        cy.get('input[type="submit"]').eq(0).click()
        cy.get('#email-form').within(() => {
        cy.get('#Company-2').invoke('prop', 'validationMessage')
        .should('equal', 'Please fill in this field1.')
        cy.log('Contact us page - Errors validation')
        })   
      })//it('Invalid test', () => {  
  })//describe('Test1 - Contactus Page',() => {
})//describe('Test Suite1', () => {
