import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('ANC Case Study Page', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.dataservicesPage()
        cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
        cy.get('h1').contains('Data Services: Data Annotation, Data Labeling, and Data Validation.').should('be.visible')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('ANC & TSA Case Study').click()
        cy.get('h1').contains('ANC & the TSA Case Study').should('be.visible')
        cy.url().should('include', 'anc-tsa-case-study')
    })
    brokenLinks.option1()
})