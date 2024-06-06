describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/aspiritech-academy/')
        cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
        cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Aspiritech Academy').should('be.visible')
        })
    it('passes', () => {
        cy.get('[href="https://us.mitsubishielectric.com/en/sustainability/greater-community/meaf-top/index.html"]').contains('MEAF').click()
        cy.title().should('eq', 'Mitsubishi Electric America Foundation | Greater Community | Sustainability | MITSUBISHI ELECTRIC UNITED STATES')
        cy.url().should('include', 'index')
        cy.go('back')
        cy.get('[href="https://haape.org/"]').contains('HAAPE').click()
        cy.title().should('eq', 'HAAPE FOUNDATION')
        cy.url().should('eq', 'https://haape.org/')
        cy.go('back')
        cy.get('#area-form').contains('Interested in enrolling in Aspiritech Academy?').should('be.visible')
        cy.get('h5 > strong').contains('Participants will be provided with:').should('be.visible')
        cy.get('.elementor-element-ad2de5e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > :nth-child(1) > strong').contains('Program Details').should('be.visible')
        cy.get('.elementor-element-1a6b44b > .elementor-widget-container > .elementor-heading-title').contains("Don't Miss Out").should('be.visible')
        cy.get('.elementor-element-bc7b3d2 > .elementor-widget-container > .elementor-heading-title > a').click()
        cy.get('.elementor-element-ddf5a75 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Sign Up Now').click()
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
