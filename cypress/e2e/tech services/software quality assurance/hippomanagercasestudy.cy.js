import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('template spec', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.sqaPage()
        cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
        cy.get('h1').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('Hippo Manager Case Study').click()
        cy.get('h1').contains('Hippo Manager Case Study').should('be.visible')
        cy.url().should('include', 'hippo-manager-case-study')
        cy.get('#hs-form-iframe-0')
       
    })
    brokenLinks.option1()
})