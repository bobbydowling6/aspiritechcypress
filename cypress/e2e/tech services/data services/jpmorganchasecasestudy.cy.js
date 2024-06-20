import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('template spec', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.dataservicesPage()
        cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
        cy.get('h1').contains('Data Services: Data Annotation, Data Labeling, and Data Validation.').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('JP Morgan Chase').click()
        cy.get('h1').contains('JP Morgan Chase QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'jp-morgan-chase')
    })
    brokenLinks.option1()
})