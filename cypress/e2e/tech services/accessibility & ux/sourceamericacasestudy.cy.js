import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('template spec', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.accessibilityPage()
        cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
        cy.get('h1').contains('Accessibility Testing: Design, UX, Usability, & WCAG Conformance').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('SourceAmerica Case Study').click()
        cy.get('h1').contains('SourceAmerica Case Study').should('be.visible')
        cy.url().should('include', 'source-america-case-study')
    })
    brokenLinks.option1()
})