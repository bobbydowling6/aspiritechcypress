describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/our-story/')
        cy.title().should('eq', 'Our Story – Aspiritech')
        cy.get('h1').contains('Our Story').should('be.visible')
        })
    it('passes', () => {
        cy.get('span').contains('Aspiritech is a tech services agency').should('be.visible')
        cy.get('p > span').contains('Brenda and Moshe Weitzberg founded Aspiritech in 2008 with the dream of finding suitable employment for their adult son Oran.').should('be.visible')
        cy.get('h2').contains('Our Founders').should('be.visible')
        cy.get('strong').contains('Brenda Weitzberg').should('be.visible')
        cy.get('strong').contains('Moshe Weitzberg').should('be.visible')
        cy.get('h2').contains('A Home of Our Own').should('be.visible')
        cy.get('h2').contains('ACE: Assist, Change, & Empower').should('be.visible')
        cy.get('a').contains('please visit our donation page').click()
        cy.title().should('eq', 'Support Our Mission – Aspiritech')
        cy.url().should('include', 'support-our-mission')
        cy.go('back')
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
