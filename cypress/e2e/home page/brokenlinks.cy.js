describe('Broken Links', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org')
        cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
        cy.get('.elementor-element-a0fbbb9 > .elementor-widget-container > .elementor-heading-title')
        .contains('Support Our Neurodiverse Team').should('be.visible')
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
    it('verify navigation across the pages', () => {
        let brokenLinks = 0
        let activeLinks = 0
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {
                        cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                        brokenLinks++
                    }
                    else {
                        cy.log(`*** link  ${index + 1} is Active Link ***`)
                        activeLinks++

                    }

                })


            }

        }).then(($links) => {

            const totalLinks = $links.length
            cy.log(`**** total links **** ${totalLinks}`)
            cy.log(`**** broken links **** ${brokenLinks}`)
            cy.log(`**** active links **** ${activeLinks}`)


        })
    })
})