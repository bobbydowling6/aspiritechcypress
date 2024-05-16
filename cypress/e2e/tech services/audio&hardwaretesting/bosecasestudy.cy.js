describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/audio-testing/')
        cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
        cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
    })
    it('passes', () => {
        cy.get('.post-3353 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Bose Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')

       
    })
})