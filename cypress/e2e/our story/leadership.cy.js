describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/leadership/')
        cy.title().should('eq', 'Leadership – Aspiritech')
        cy.get('h1').contains('Leadership').should('be.visible')
        })
    it('passes', () => {
        cy.get('h2').contains('kindness drives growth').should('be.visible')
        cy.get('h2').contains('Meet Our Leadership Team').should('be.visible')
        cy.get('span').contains('CEO').should('be.visible')
        cy.get('span').contains('VP of People & Culture').should('be.visible')
        cy.get('span').contains('Director of Finance').should('be.visible')
        cy.get('span').contains('VP of Operations').should('be.visible')
        cy.get('span').contains('Chief Growth Officer').should('be.visible')
        cy.get('span').contains('Director of IT').should('be.visible')
        cy.get('h2').contains('Program Directors').should('be.visible')
        cy.get('h2').contains('Board of Directors').should('be.visible')
        cy.get('h4').contains('Officers').should('be.visible')
        cy.get('h4').contains('Board Members').should('be.visible')
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
