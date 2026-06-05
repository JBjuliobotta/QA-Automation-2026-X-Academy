describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it ('login usuario bloqueado', ()=> {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Sorry, this user has been locked out.")
    
    })

    it ('logout menu hamburguesa', ()=> {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include','https://www.saucedemo.com/')
    })
})