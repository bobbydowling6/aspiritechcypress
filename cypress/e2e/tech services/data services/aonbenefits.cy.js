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
        cy.get('h3.elementor-post__title').contains('Aon Benefits Calculator Case Study').click()
        cy.get('h1').contains('Aon Benefits Calculator Case Study').should('be.visible')
        cy.url().should('include', 'aon-benefits-calculator')
    })
    brokenLinks.option1()
})