describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/our-story/')
        cy.title().should('eq', 'Our Story – Aspiritech')
        cy.get('.elementor-element-af53a48 > .elementor-widget-container > .elementor-heading-title').contains('Our Story').should('be.visible')
        })
    it('passes', () => {
        cy.contains('Aspiritech is a tech services agency').should('be.visible')
        cy.get('p > span').contains('Brenda and Moshe Weitzberg founded Aspiritech in 2008 with the dream of finding suitable employment for their adult son Oran.').should('be.visible')
        cy.get('.elementor-element-726ddb7 > .elementor-widget-container > .elementor-heading-title').contains('Our Founders').should('be.visible')
        cy.get('.elementor-widget-container > :nth-child(1) > strong').contains('Brenda Weitzberg').should('be.visible')
        cy.get(':nth-child(4) > strong').contains('Moshe Weitzberg').should('be.visible')
        cy.get('.elementor-element-8c1e698 > .elementor-widget-container > .elementor-heading-title').contains('A Home of Our Own').should('be.visible')
        cy.get('.elementor-element-04dca01 > .elementor-widget-container > .elementor-heading-title').contains('ACE: Assist, Change, & Empower').should('be.visible')
        cy.get('.elementor-widget-container > :nth-child(5) > a').contains('please visit our donation page').click()
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
