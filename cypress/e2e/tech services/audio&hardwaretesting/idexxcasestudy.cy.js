describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/audio-testing/')
        cy.title().should('eq', 'Audio Testing: Speaker, Headphone & Connectivity Testing – Aspiritech')
        cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Audio Testing: Speaker, Headphone & Connectivity Testing').should('be.visible')
        cy.url().should('include', 'audio-testing')
    })
    it('passes', () => {
        cy.get('.post-4362 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('IDEXX Case Study').click()
        cy.get('.elementor-element-1b0ceec4 > .elementor-widget-container > .elementor-heading-title').contains('IDEXX QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'idexx-case-study')

       
    })
})