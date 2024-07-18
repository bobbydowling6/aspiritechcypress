import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('AON Accessibility Case Study Page', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.accessibilityPage()
        cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
        cy.get('h1').contains('Accessibility Testing: Design, UX, Usability, & WCAG Conformance').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('Aon Accessibility Audit Case Study').click()
        cy.get('h1').contains('Aon Accessibility Audit Case Study').should('be.visible')
        cy.url('include', 'aon-accessibility-audit-case-study')
    })
    brokenLinks.option1()
})