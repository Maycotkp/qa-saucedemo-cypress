describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/') 
  });
  
  it('CT001 - Deve realisar login com credenciais valido', () => {
    /*
    CT01 - Login com sucesso
    Dado que o usuário acessa a página de login
    Quando informa usuário "standard_user" e senha "secret_sauce"
    Então deve acessar a página de produtos*/ 
    
    cy.login('standard_user', 'secret_sauce'),
    cy.url().should('include', 'inventory.html')
  }),
  
  it('CT002 - Deve realisar login com credenciais invalida ', () =>{
    /*
    CT02 - Login inválido
    Dado que o usuário acessa a página de login
    Quando informa usuário inválido e senha inválida
    Então deve exibir mensagem de erro*/

    cy.login('usuarioerrado ', 'senhaErrada')
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
  }),

  it('CT003 - Deve realisar login com credenciais bloqueadas', () =>{
    /*
    CT03 - Usuário bloqueado
    Dado que o usuário acessa a página de login
    Quando informa usuário "locked_out_user" e senha válida
    Então deve exibir mensagem de usuário bloqueado */  

    cy.login('locked_out_user', 'secret_sauce'),
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

})