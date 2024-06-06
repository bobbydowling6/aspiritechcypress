describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/support-our-mission/')
        cy.title().should('eq', 'Support Our Mission – Aspiritech')
        cy.get('.elementor-element-e928d8d > .elementor-widget-container > .elementor-heading-title').contains('Support Our Mission').should('be.visible')
        
        })
    it('passes', () => {
        cy.get('.elementor-element-379d99c > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Donate now').click()
        cy.get('.elementor-element-fdc04e4 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > h2').contains('Other Ways to Donate').should('be.visible')
        cy.get('.elementor-element-6b13a56 > .elementor-widget-wrap > .elementor-element').contains('Text to Donate:').should('be.visible')
        cy.get('.elementor-element-32fe179 > .elementor-widget-wrap').contains('Mail your donation').should('be.visible')
        cy.get('.elementor-element-db08a9c > .elementor-widget-container > p').contains('Buy Aspiritech Merchandise').should('be.visible')
        cy.get('.elementor-element-dc14c61 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Shop Now').click()
        cy.get('.stf-Hero_TitleTxt').contains('Aspiritech Gifts & Apparel').should('be.visible')
        cy.title().should('eq', 'Aspiritech Gifts & Apparel | Support Our Mission | Bonfire')
        cy.url().should('include', 'aspiritech-merch')
        cy.go('back')
        cy.get('.elementor-element-05c4af7 > .elementor-widget-container > p').contains('Create a Lasting Legacy').should('be.visible')
        cy.get('.elementor-element-ce25fe6 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Donor Confidentiality and Privacy Policy').click()
        cy.go('back')
        cy.get('.elementor-element-93b4d58 > .elementor-widget-container > h2').contains('Support Aspiritech!')
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
        cy.get(':nth-child(4) > :nth-child(6) > a').contains('support@givelively.org').should('be.visible')
        })
        it('Finds all broken links', () => {
            cy.get('a').each(link => {
                if (link.prop('href'))
                    cy.request({
                        url: link.prop('href'),
                        failOnStatusCode: false
                    })
                cy.log(link.prop('href'))
             })
        })
    })
