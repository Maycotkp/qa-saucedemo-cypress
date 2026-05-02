describe('Compras - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('/'),
        cy.login('standard_user', 'secret_sauce'),
        cy.url().should('include', 'inventory.html')
    });

    it ('CT04 - listar Produto', () =>  {
        /*
        CT04 - Listar produtos
        Dado que o usuário está logado
        Então deve visualizar a lista de produtos */
        cy.get('[data-test="item-4-img-link"]').should('be.visible'),
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('be.visible')
    });

    it('CT05 - Oirdenar pordutos por preço', () => {
        /*CT05 - Ordenar produtos por preço
        Dado que o usuário está na página de produtos
        Quando seleciona ordenação por preço
        Então os produtos devem ser exibidos em ordem correta*/

        let precoMenor
        let precoMaior

        cy.get('[data-test="product-sort-container"]').should('be.visible').select('Price (low to high)'),

        cy.get('[data-test="inventory-item-price"]').eq(0).invoke('text')
        .then((t1) => {
            precoMenor = parseFloat(t1.replace(/[^\d.]/g, ''))

            cy.get('[data-test="inventory-item-price"]').eq(1)
            .invoke('text')
            .then((t2) => {
                precoMaior = parseFloat(t2.replace(/[^\d.]/g, ''))

                expect(precoMaior).to.be.greaterThan(precoMenor)
            })
        })

    
    });

    it('CT06 - Adicionar produto ao carrinho', () => {
        /*CT06 - Adicionar produto ao carrinho
        Dado que o usuário está logado
        Quando adiciona um produto ao carrinho
        Então o carrinho deve conter 1 item*/

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click(),
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible'),
        cy.get('[data-test="shopping-cart-link"]').click(),
        cy.url().should('include','cart.html'),
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('be.visible')

    });

    it('CT07 - Adicionar produto no carrinho e depois remover', () => {
        /*CT07 - Remover produto do carrinho
        Dado que o usuário adicionou um produto
        Quando remove o produto
        Então o carrinho deve ficar vazio*/
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(),
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(),
        cy.get('[data-test="shopping-cart-badge"]').should('contain','2'),
        cy.get('[data-test="shopping-cart-link"]').click(),
        cy.url().should('include','cart.html'),
        cy.get('[data-test="remove-sauce-labs-backpack"]').click(),
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('not.be.visible')

    });

    it('CT08 - Adiconar dois produto ao carrinho', () => {
        /*CT08 - Validar quantidade no carrinho
        Dado que o usuário adicionou 2 produtos
        Quando acessa o carrinho
        Então deve visualizar 2 itens*/
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(),
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(),
        cy.get('[data-test="shopping-cart-badge"]').should('contain','2'),
        cy.get('[data-test="shopping-cart-link"]').click(),
        cy.url().should('include','cart.html'),
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('be.visible')
        cy.get('[data-test="cart-list"] > :nth-child(4)').should('be.visible')
        
    });

});