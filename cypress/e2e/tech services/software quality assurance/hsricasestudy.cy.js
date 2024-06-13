describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/quality-assurance/')
        cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
        cy.get('h1').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('HSRI Case Study').click()
        cy.get('h1').contains('HSRI Accessibility Case Study').should('be.visible')
        cy.url().should('include', 'hsri-case-study')
        cy.get('#hs-form-iframe-0')
       
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