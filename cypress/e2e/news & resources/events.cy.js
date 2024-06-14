describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/events/')
        cy.title().should('eq', 'Events – Aspiritech')
        cy.get('h1').contains('Aspiritech Events').should('be.visible')
            })
    it('passes', () => {
        cy.get('.tribe-events-c-events-bar__search-button').click()
        cy.get('#tribe-events-events-bar-keyword').type('Aspiritech Summer Picnic')
        cy.get('.tribe-common-c-btn').contains('Find Events').click()
        cy.get('.tribe-events-c-nav__prev').contains('Previous').click()
        cy.get('.tribe-events-c-nav__list-item--next').contains('Next').click()
        cy.get('.tribe-events-c-nav__today').contains('Today').click()
        cy.get('.tribe-events-c-events-bar__search-button').click()
        cy.get('#tribe-events-events-bar-keyword').clear()
        cy.get('.tribe-common-c-btn').contains('Find Events').click()
        cy.get('.tribe-events-calendar-latest-past__heading').contains('Latest Past Events').should('be.visible')
        cy.get('.tribe-events .tribe-events-calendar-latest-past__event-title-link').eq(0).contains('a').click()
        cy.go('back')
        cy.get('.tribe-events .tribe-events-calendar-latest-past__event-title-link').eq(1).contains('a').click()
        cy.go('back')
        })
        it('Finds all broken links', () => {
            cy.get('a').each(link => {
                if (link.prop('href'))
                    cy.request({
                        url: link.prop('href'),
                        failOnStatusCode: false
                    })
                cy.log(link.prop('href'))
            })
        })
    })
