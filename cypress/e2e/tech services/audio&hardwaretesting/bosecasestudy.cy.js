import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('Bose Case Study Page', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.audiotestingPage()
        cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
        cy.get('h1').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('Bose Case Study').click()
        cy.get('h1').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')  
    })
    brokenLinks.option1()
})