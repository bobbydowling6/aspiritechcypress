describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/accessibility/')
        cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
        cy.get('h1').contains('Accessibility Testing: Design, UX, Usability, & WCAG Conformance').should('be.visible')
    })
    it('passes', () => {
        cy.get('.elementor-widget-container > .yellow').contains('Book your discovery call now').click()
        cy.get('span.elementor-heading-title').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('.elementor-element-c81d9d6 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').contains('The Business Case for Accessibility').click()
        cy.get('h1').contains('The Business Case for Digital Accessibility').should('be.visible')
        cy.title().should('eq', 'The Business Case for Digital Accessibility – Aspiritech')
        cy.url().should('include', 'business-case-for-accessibility')
        cy.go('back')
        cy.get('.elementor-element-260fb13 > .elementor-widget-container > .elementor-heading-title > a').contains('View all case studies').click()
        cy.get('h1').contains('Case Studies').should('be.visible')
        cy.url().should('include', 'case-studies')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('SourceAmerica Case Study').click()
        cy.get('h1').contains('SourceAmerica Case Study').should('be.visible')
        cy.url().should('include', 'source-america-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('Aon Accessibility Audit Case Study').click()
        cy.get('h1').contains('Aon Accessibility Audit Case Study').should('be.visible')
        cy.url('include', 'aon-accessibility-audit-case-study')
        cy.go('back')
        cy.get('p > .yellow').click()
        cy.get('span.elementor-heading-title').contains('Contact us').should('be.visible')
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
