describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/accessibility/')
        cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
        cy.get('.elementor-element-4fb348f1 > .elementor-widget-container > .elementor-heading-title').contains('Accessibility Testing: Design, UX, Usability, & WCAG Conformance').should('be.visible')
    })
    it('passes', () => {
        cy.get('.post-9974 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Aon Accessibility Audit Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Aon Accessibility Audit Case Study').should('be.visible')
        cy.url('include', 'aon-accessibility-audit-case-study')
    })
})