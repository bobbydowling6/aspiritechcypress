describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/data-services/')
        cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
        cy.get('.elementor-element-63b8939c > .elementor-widget-container > .elementor-heading-title').contains('Data Services: Data Annotation, Data Labeling, and Data Validation.').should('be.visible')
    })
    it('passes', () => {
        cy.get('.post-9962 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Aon Benefits Calculator Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Aon Benefits Calculator Case Study').should('be.visible')
        cy.url().should('include', 'aon-benefits-calculator')
    })
})