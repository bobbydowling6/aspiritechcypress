import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('Neurodiversity Library Page', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.neuroDiversityPage()
        cy.title().should('eq', 'Neurodiversity Resource Library – Aspiritech')
        cy.get('h1').contains('Neurodiversity Resource Library').should('be.visible')
        })
    it('passes', () => {
        cy.get('div.elementor-element-4447645 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Contact Us').click()
        cy.title().should('eq', 'Contact Us – Aspiritech')
        cy.url().should('include', 'contact-us')
        cy.get('span').contains('Contact us').should('be.visible')
        cy.go('back')
        cy.get('a').contains('Focus on Self-Care').click()
        cy.go('back')
        cy.get('div.elementor-widget-posts .elementor-post__title, .elementor-widget-posts .elementor-post__title a').eq(0).contains('a').click()
        cy.go('back')
    })
        brokenLinks.option1()
    })
