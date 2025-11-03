import Url from "../support/PageObjects/url"
import Brokenlinks from "../support/PageObjects/brokenlinks"
describe('Aspiritech Academy', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.aspiritechAcademy()
        cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
        cy.get('h1').contains('Aspiritech Academy').should('be.visible')
        })
    it('Tests Aspiritech Academy Page', () => {
        url.mitsubishiLink()
        cy.title().should('eq', 'Mitsubishi Electric America Foundation | Greater Community | Sustainability | MITSUBISHI ELECTRIC UNITED STATES')
        cy.url().should('include', 'index')
        cy.go('back')
        url.haapeLink()
        cy.title().should('eq', 'HAAPE - Helping Adults with Autism Perform and Excel')
        cy.url().should('eq', 'https://haape.org/')
        cy.go('back')
        cy.get('#area-form').contains('Interested in enrolling in Aspiritech Academy?').should('be.visible')
        cy.get('h5 > strong').contains('Participants will be provided with:').should('be.visible')
        cy.get('h3').contains('Program Details').should('be.visible')
        cy.get('h2').contains("Don't Miss Out").should('be.visible')
        cy.get('a').contains('Sign up for Aspiritech Academy program updates and enrollment news').click()
        cy.get('a.elementor-button').contains('Sign Up Now').click()
        })
        brokenLinks.option1()
    })
