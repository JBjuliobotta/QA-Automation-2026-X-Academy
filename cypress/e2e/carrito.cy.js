describe('Carrito - Sauce Demo', () => {})

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })

    it('agregar producto al carrito', () => {  
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
    })
    it ('eliminar producto del carrito', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
    })
    it ('agregar varios productos al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('contain', '2')
    })