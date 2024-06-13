describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/aspiritech-academy/')
        cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
        cy.get('h1').contains('Aspiritech Academy').should('be.visible')
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
        cy.get('h3').contains('Program Details').should('be.visible')
        cy.get('h2').contains("Don't Miss Out").should('be.visible')
        cy.get('.elementor-heading-title > a').contains('Sign up for Aspiritech Academy program updates and enrollment news').click()
        cy.get('.elementor-button').contains('Sign Up Now').click()
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
