describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/neurodiversity-resources/')
        cy.title().should('eq', 'Neurodiversity Resource Library – Aspiritech')
        cy.get('.elementor-element-48179d4 > .elementor-widget-wrap').contains('Neurodiversity Resource Library').should('be.visible')
        })
    it('passes', () => {
        cy.get('.elementor-element-4447645 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Contact Us').click()
        cy.title().should('eq', 'Contact Us – Aspiritech')
        cy.url().should('include', 'contact-us')
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Contact us').should('be.visible')
        cy.go('back')
        cy.get('.elementor-element-0f3e9c7 > .elementor-widget-container > .elementor-heading-title > a').contains('Focus on Self-Care').click()
        cy.go('back')
        cy.get('.elementor-widget-posts .elementor-post__title, .elementor-widget-posts .elementor-post__title a').eq(0).contains('a').click()
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
