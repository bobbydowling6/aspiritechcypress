describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/team-members/')
        cy.title().should('eq', 'Team Members – Aspiritech')
        cy.get('h1').contains('Team Members').should('be.visible')
        })
    it('passes', () => {
        cy.get('h2').contains('Staff TESTERmonials​').should('be.visible')
        cy.get('strong').contains('Join Our Team').should('be.visible')
        cy.get('a.elementor-button').contains('Careers at Aspiritech').click()
        cy.title().should('eq', 'Careers – Aspiritech')
        cy.url().should('include', 'careers')
        cy.get('h1').contains('Careers').should('be.visible')   
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
