describe('Compras - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('/'),
        cy.login('standard_user', 'secret_sauce'),
        cy.url().should('include', 'inventory.html')
    });
    
    it('CT09 - Fazer Logut', () => {
        /*CT09 - Logout
        Dado que o usuário está logado
        Quando realiza logout
        Então deve retornar para a tela de login*/
        cy.get('#react-burger-menu-btn').click(),
        cy.get('[data-test="logout-sidebar-link"]').click(),
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});