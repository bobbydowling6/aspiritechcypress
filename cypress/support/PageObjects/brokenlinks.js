class Brokenlinks
{
    option1()
    {
        return it('Finds all broken links', () => {
            cy.get('a').each(link => {
                if (link.prop('href'))
                    cy.request({
                        url: link.prop('href'),
                        failOnStatusCode: false
                    })
                cy.log(link.prop('href'))
            })
        })
    }
    option2()
    {
        return it('verify navigation across the pages', () => {
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
    }
}
export default Brokenlinks