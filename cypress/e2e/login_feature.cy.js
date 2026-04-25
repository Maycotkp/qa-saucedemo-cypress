describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/') 
  });
  
  it('CT001 - Deve realisar login com credenciais valido', () => {
    cy.login('standard_user', 'secret_sauce'),
    cy.url().should('include', 'inventory.html')
  }),
  
  it('CT002 - Deve realisar login com credenciais invalida ', () =>{
    cy.login('usuarioerrado ', 'senhaErrada')
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
  }),

  it('CT003 - Deve realisar login com credenciais bloqueadas', () =>{
    cy.login('locked_out_user', 'secret_sauce'),
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })
})