import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('Finds & Detects Broken Links', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.homePage()
        cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
        cy.get('h3').contains('Support Our Neurodiverse Team').should('be.visible')
      })
    brokenLinks.option1()
    brokenLinks.option2()
})