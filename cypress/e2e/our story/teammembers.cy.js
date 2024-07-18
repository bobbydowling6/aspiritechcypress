import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('Team Members Page', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.teamMembers()
        cy.title().should('eq', 'Team Members – Aspiritech')
        cy.get('h1').contains('Team Members').should('be.visible')
        })
    it('passes', () => {
        cy.get('h2').contains('Staff TESTERmonials​').should('be.visible')
        cy.get('strong').contains('Join Our Team').should('be.visible')
        cy.get('a.elementor-button').contains('Careers at Aspiritech').click()
        cy.title().should('eq', 'Careers – Aspiritech')
        cy.url().should('include', 'careers')
        cy.get('h1').contains('Careers').should('be.visible')   
        cy.go('back')
        })
        brokenLinks.option1()
    })
