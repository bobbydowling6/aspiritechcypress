describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/aspiritech-press/')
        cy.title().should('eq', 'Aspiritech Press – Aspiritech')
        cy.get('h2').contains('Aspiritech Press Blogs').should('be.visible')  
        })
    it('passes', () => {
        cy.section('Selecting the First 2 Articles')
        cy.get('.post-12570 > .elementor-post__card > .elementor-post__text > .elementor-post__title > a').click()
        cy.go('back')
        cy.get('.post-12117 > .elementor-post__card > .elementor-post__text > .elementor-post__title > a').click()        
        cy.go('back')
        cy.get('h2').contains('Aspiritech Spotlights').should('be.visible')
        cy.get('h3.elementor-image-box-title > a').click()
        cy.title().should('eq', 'Retriever – Experts Tap Into Common Data Security Mistakes Employees Make')
        cy.url().should('include', 'security')
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
