describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/team-members/')
        cy.title().should('eq', 'Team Members – Aspiritech')
        cy.get('.elementor-element-9264e48 > .elementor-widget-container > .elementor-heading-title').contains('Team Members').should('be.visible')
        })
    it('passes', () => {
        cy.get('.elementor-element-ab6562c > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Staff TESTERmonials​').should('be.visible')
        cy.get('.elementor-element-8c040d2 > .elementor-widget-container > p > strong').contains('Join Our Team').should('be.visible')
        cy.get('.elementor-element-471a896 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Careers at Aspiritech').click()
        cy.title().should('eq', 'Careers – Aspiritech')
        cy.url().should('include', 'careers')
        cy.get('.elementor-element-64bc670 > .elementor-widget-container > .elementor-heading-title').contains('Careers').should('be.visible')   
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
