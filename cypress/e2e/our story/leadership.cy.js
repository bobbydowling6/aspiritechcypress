describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/leadership/')
        cy.title().should('eq', 'Leadership – Aspiritech')
        cy.get('.elementor-element-9ce7074 > .elementor-widget-container > .elementor-heading-title').contains('Leadership').should('be.visible')        })
    it('passes', () => {
        cy.get('.elementor-element-ef6b06c > .elementor-widget-container > .elementor-heading-title').contains('kindness drives growth').should('be.visible')
        cy.get('.elementor-element-579b10b > .elementor-widget-container > .elementor-heading-title').contains('Meet Our Leadership Team').should('be.visible')
        cy.get('.elementor-element-ed655d5 > .elementor-widget-container > .elementor-heading-title').contains('CEO').should('be.visible')
        cy.get('.elementor-element-899d098 > .elementor-widget-container > .elementor-heading-title').contains('VP of People & Culture').should('be.visible')
        cy.get('.elementor-element-21707e5 > .elementor-widget-container > .elementor-heading-title').contains('Director of Finance').should('be.visible')
        cy.get('.elementor-element-bfe16ac > .elementor-widget-container > .elementor-heading-title').contains('VP of Operations').should('be.visible')
        cy.get('.elementor-element-ffa5d50 > .elementor-widget-container > .elementor-heading-title').contains('Chief Growth Officer').should('be.visible')
        cy.get('.elementor-element-8f4bce3 > .elementor-widget-container > .elementor-heading-title').contains('Director of IT').should('be.visible')
        cy.get('.elementor-element-f93db2f > .elementor-widget-container > .elementor-heading-title').contains('Program Directors').should('be.visible')
        cy.get('.elementor-element-444e831 > .elementor-widget-container > .elementor-heading-title').contains('Board of Directors').should('be.visible')
        cy.get('.elementor-element-f460c3d > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Officers').should('be.visible')
        cy.get('.elementor-element-98d3952 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Board Members').should('be.visible')
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
