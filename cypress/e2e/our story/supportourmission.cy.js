describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/support-our-mission/')
        cy.title().should('eq', 'Support Our Mission – Aspiritech')
        cy.get('h1').contains('Support Our Mission').should('be.visible')
        
        })
    it('passes', () => {
        cy.get('a.elementor-button').contains('Donate now').click()
        cy.get('h2').contains('Other Ways to Donate').should('be.visible')
        cy.get('p').contains('Text to Donate:').should('be.visible')
        cy.get('p').contains('Mail your donation').should('be.visible')
        cy.get('p').contains('Buy Aspiritech Merchandise').should('be.visible')
        cy.get('a.elementor-button').contains('Shop Now').click()
        cy.get('.stf-Hero_TitleTxt').contains('Aspiritech Gifts & Apparel').should('be.visible')
        cy.title().should('eq', 'Aspiritech Gifts & Apparel | Support Our Mission | Bonfire')
        cy.url().should('include', 'aspiritech-merch')
        cy.go('back')
        cy.get('p').contains('Create a Lasting Legacy').should('be.visible')
        cy.get('a.elementor-button').contains('Donor Confidentiality and Privacy Policy').click()
        cy.go('back')
        cy.get('h2').contains('Support Aspiritech!')
        cy.get('[href="https://www.givelively.org/terms"] > span').contains('Terms').click()
        cy.title().should('eq', 'Terms Of Use | Give Lively')
        cy.url().should('include', 'terms-of-use')
        cy.get('.c-title-3').contains('Terms Of Use').should('be.visible')
        cy.go('back')
        cy.get('[href="https://www.givelively.org/privacy"] > span').contains('Privacy').click()
        cy.title().should('eq', 'Privacy Policy | Give Lively')
        cy.url().should('include', 'privacy-policy')
        cy.get('.c-title-3').contains('Privacy Policy').should('be.visible')
        cy.go('back')
        cy.get('a').contains('support@givelively.org').should('be.visible')
        })
        // it('Finds all broken links', () => {
        //     cy.get('a').each(link => {
        //         if (link.prop('href'))
        //             cy.request({
        //                 url: link.prop('href'),
        //                 failOnStatusCode: false
        //             })
        //         cy.log(link.prop('href'))
        //      })
        // })
    })
