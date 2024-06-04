describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/quality-assurance/')
        cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
        cy.get('.elementor-element-3f7eeaa > .elementor-widget-container > .elementor-heading-title').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
    })
    it('passes', () => {
        cy.get('.elementor-widget-container > .yellow').contains('Book your discovery call now').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('.elementor-element-bdb343c > .elementor-widget-container > .elementor-heading-title > a').contains('View all case studies').click()
        cy.get('.elementor-element-04c4dba > .elementor-widget-container > .elementor-heading-title').contains('Case Studies').should('be.visible')
        cy.url().should('include', 'case-studies')
        cy.go('back')
        cy.get('.post-3353 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Bose Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')
        cy.go('back')
        cy.get('.post-10877 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Hippo Manager Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Hippo Manager Case Study').should('be.visible')
        cy.url().should('include', 'hippo-manager-case-study')
        cy.go('back')
        cy.get('.post-10800 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('HSRI Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('HSRI Accessibility Case Study').should('be.visible')
        cy.url().should('include', 'hsri-case-study')
        cy.go('back')
        cy.get('p > .yellow').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
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