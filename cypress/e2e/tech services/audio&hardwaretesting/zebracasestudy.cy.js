describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/audio-testing/')
        cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
        cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
    })
    it('passes', () => {
        cy.get('.post-4374 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Zebra Case Study').click()
        cy.get('.elementor-element-2bbb5014 > .elementor-widget-container > .elementor-heading-title').contains('Zebra Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'zebra-case-study')

       
    })
})