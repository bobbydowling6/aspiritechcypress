describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://aspiritech.org')
    cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
    cy.get('.elementor-element-a0fbbb9 > .elementor-widget-container > .elementor-heading-title')
    .contains('Support Our Neurodiverse Team').should('be.visible')
  })
  it('passes', () => {   
    cy.get('.elementor-element-b8ce37c > .elementor-widget-container > p').should('be.visible')
    cy.get('.elementor-element-6dab2e9 > .elementor-widget-container > .elementor-heading-title').contains('Quality Assurance, Accessibility, and Data Services').should('be.visible')
    cy.get('em').contains('Excellence powered by a neurodivergent team')
    cy.get('.elementor-element-62ddefa4 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > h2').contains('Our Services').should('be.visible')
    cy.get('.elementor-element-5a57779f').contains('Accessibility').should('be.visible')
    cy.get('.elementor-element-57c1ddfe > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Accessibility').click()
    cy.url().should('include', 'accessibility')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    cy.get('.elementor-element-5a57779f').contains('Audio Testing').should('be.visible')
    cy.get('.elementor-element-6400dffc > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Audio Testing').click()
    cy.url().should('include', 'audio-testing')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    cy.get('.elementor-element-5a57779f').contains('Quality Assurance').should('be.visible')
    cy.get('.elementor-element-2d2272a0 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Quality Assurance').click()
    cy.url().should('include', 'quality-assurance')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    cy.get('.elementor-element-5a57779f').contains('Data Services').should('be.visible')
    cy.get('.elementor-element-72588606 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').contains('Data Services').click()
    cy.url().should('include', 'data-services')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    cy.get('.elementor-element-2c0e6c2 > .elementor-widget-container > .elementor-heading-title').contains('Discover how we can help').should('be.visible')
    cy.get('.yellow').contains('Quality Assurance, End-To-End User Testing, and More').click()
    cy.get('.elementor-element-3f7eeaa > .elementor-widget-container > .elementor-heading-title').contains('Software Quality Assurance').should('be.visible')
    cy.url().should('include', 'quality-assurance')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    cy.get('.elementor-element-4ecaeb0 > .elementor-widget-wrap').should('be.visible').log('Maunal and Automated Testing', 'Audio Testing', 'Data Integrity and Migration')
    cy.get('.elementor-element-45c70b1 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > h5').contains('All Services').should('be.visible')
    cy.get('.elementor-widget-container > ul').contains('ul', 'Audio Testing').should('be.visible')
    cy.get('.elementor-widget-container > ul > :nth-child(1) > a').click()
    cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
    cy.url().should('include', 'audio-testing')
    cy.get('#aspiritech-logo > .elementor-widget-container > a > .attachment-large').click()
    //check for the column div
    cy.get('div[data-id="bfa597f"]').should('be.visible')
    //check for the video widget div
    cy.get('.elementor-element-1e614d4').should('be.visible')
    //check for the video iframe
    cy.get('.elementor-element-1e614d4 .elementor-video-iframe').should('be.visible').and('have.attr', 'data-src', 
    'https://www.youtube.com/embed/kCgARx7JYdY?feature=oembed&color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1').as('iframeBody')
    //load the page and wait for the iframe to load
    //cy.frameLoaded('.elementor-element-1e614d4 .elementor-video-iframe')
    //cy.iframe().find('body').as('iframeBody')
    //play the video
    cy.get('@iframeBody').find('.elementor-element-1e614d4 .elementor-video-iframe').then(($video) => {
      $video[0].play()
    })
    cy.wait(10000)
    cy.get('@iframeBody').find('video').then(($video) => {
      $video[0].pause()
    })
    //Getting first 3 article posts on section News & Resources
    cy.get('.elementor-element-48e1f39').then(($article) => {
      cy.wrap($article[0]).should('contain', 'Help Us Build a Virtual Cookbook')      
      cy.wrap($article[0]).should('contain', 'On the Verge Episode 2: Sensory Gated Art with Amanda Hebert Hughes')
      cy.wrap($article[0]).should('contain', 'Mitsubishi Electric America Foundation Announces $2 Million in New Grants')
    })
    
  })
})