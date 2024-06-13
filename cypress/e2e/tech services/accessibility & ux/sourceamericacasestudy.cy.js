describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/accessibility/')
        cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
        cy.get('h1').contains('Accessibility Testing: Design, UX, Usability, & WCAG Conformance').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('SourceAmerica Case Study').click()
        cy.get('h1').contains('SourceAmerica Case Study').should('be.visible')
        cy.url().should('include', 'source-america-case-study')
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