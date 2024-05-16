describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/quality-assurance/')
        cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
        cy.get('.elementor-element-3f7eeaa > .elementor-widget-container > .elementor-heading-title').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
    })
    it('passes', () => {
        cy.get('.post-10800 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('HSRI Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('HSRI Accessibility Case Study').should('be.visible')
        cy.url().should('include', 'hsri-case-study')
        cy.get('#hs-form-iframe-0')
       
    })
})