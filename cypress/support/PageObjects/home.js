class Home
{
    accessibility()
    {
        return cy.get('.elementor-element-3fb7951').contains('Accessibility').should('be.visible')
    }
    audioTesting()
    {
        return cy.get('.elementor-element-3f841cd').contains('Audio Testing').should('be.visible')
    }
    dataServices()
    {
        return cy.get('.elementor-element-0fafa07').contains('Data Services').should('be.visible')
    }
    qualityAssurance()
    {
        return cy.get('.elementor-element-a0542dc').contains('Quality Assurance').should('be.visible')
    }
    creativeServices()
    {
        return cy.get('.elementor-element-fe5afb1').contains('Creative Services').should('be.visible')
    }
    webDesignDevelopment()
    {
        return cy.get('.elementor-element-7e58840').contains('Web Design & Development').should('be.visible')
    }
    automation()
    {
        return cy.get('.elementor-element-9293e7c').contains('Automation').should('be.visible')
    }
    managedIt()
    {
        return cy.get('.elementor-element-b970617').contains('Managed IT').should('be.visible')
    }
    cybersecurity()
    {
        return cy.get('.elementor-element-7b3f678').contains('Cybersecurity').should('be.visible')
    }
    columndiv()
    {
        return cy.get('div[data-id="bfa597f"]').should('be.visible')
    }
    videowidget()
    {
        return cy.get('.elementor-element-1e614d4').should('be.visible')
    }
    videoIframe()
    {
        return cy.get('.elementor-element-1e614d4 .elementor-video-iframe').should('be.visible').and('have.attr', 'data-src',
            'https://www.youtube.com/embed/kCgARx7JYdY?feature=oembed&color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1').as('iframeBody')
    }
    getArticles()
    {
        return cy.get('.elementor-element-48e1f39').then(($article) => {
            cy.wrap($article[0]).log('Article 1')
            cy.wrap($article[1]).log('Article 2')
            cy.wrap($article[2]).log('Article 3')
          })
    }
}
export default Home