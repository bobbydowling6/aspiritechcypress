import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('template spec', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.eventsPage()
        cy.title().should('eq', 'Events – Aspiritech')
        cy.get('h1').contains('Aspiritech Events').should('be.visible')
            })
    it('passes', () => {
        cy.get('button.tribe-events-c-events-bar__search-button').click()
        cy.get('#tribe-events-events-bar-keyword').type('Aspiritech Summer Picnic')
        cy.get('button.tribe-common-c-btn').contains('Find Events').click()
        cy.get('a.tribe-events-c-nav__prev').contains('Previous').click()
        cy.get('a.tribe-events-c-nav__next').contains('Next').click()
        cy.get('a.tribe-events-c-nav__today').contains('Today').click()
        cy.get('button.tribe-events-c-events-bar__search-button').click()
        cy.get('#tribe-events-events-bar-keyword').clear()
        cy.get('button.tribe-common-c-btn').contains('Find Events').click()
        cy.get('h2.tribe-events-calendar-latest-past__heading').contains('Latest Past Events').should('be.visible')
        cy.get('div.tribe-events .tribe-events-calendar-latest-past__event-title-link').eq(0).contains('a').click()
        cy.go('back')
        cy.get('div.tribe-events .tribe-events-calendar-latest-past__event-title-link').eq(1).contains('a').click()
        cy.go('back')
        })
        brokenLinks.option1()
    })
