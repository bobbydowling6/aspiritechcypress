class Home
{
    accessibility()
    {
        return cy.get('.elementor-element-5a57779f').contains('Accessibility').should('be.visible')
    }
    audioTesting()
    {
        return cy.get('.elementor-element-5a57779f').contains('Audio Testing').should('be.visible')
    }
    dataServices()
    {
        return cy.get('.elementor-element-5a57779f').contains('Data Services').should('be.visible')
    }
    qualityAssurance()
    {
        return cy.get('.elementor-element-5a57779f').contains('Quality Assurance').should('be.visible')
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
            cy.wrap($article[0]).should('contain', 'Webinar Registration: Unlock Your Organization’s Data with AI on July 18')
            cy.wrap($article[0]).should('contain', 'Is There Healing in Traditional Medicine for Adults on the Spectrum?')
            cy.wrap($article[0]).should('contain', 'How Galileo’s Story Sheds Light on Neurodivergence and Self-Esteem')
          })
    }
}
export default Home