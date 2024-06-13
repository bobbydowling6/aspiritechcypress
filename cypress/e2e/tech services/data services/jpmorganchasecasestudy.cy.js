describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/data-services/')
        cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
        cy.get('h1').contains('Data Services: Data Annotation, Data Labeling, and Data Validation.').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('JP Morgan Chase').click()
        cy.get('h1').contains('JP Morgan Chase QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'jp-morgan-chase')
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