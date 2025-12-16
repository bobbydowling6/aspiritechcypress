import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('Finds & Detects Broken Links', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.homePage()
        cy.title().should('eq', 'Welcome to Aspiritech » Aspiritech Neurodivergent QA Testers')
      })
    brokenLinks.option1()
    brokenLinks.option2()
})