describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/')
        cy.title().should('eq', 'Services – Aspiritech')
        cy.get('h2').contains('Services').should('be.visible')
        cy.url().should('include', 'services')
    })
    it('passes', () => {
        cy.get('.elementor-element-3132c8b > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click()
        cy.get('span').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('h2').contains('Quality Assurance, Accessibility, & Data Services').should('be.visible')
        cy.get('.elementor-element-6a46db7 > .elementor-widget-container > :nth-child(3) > a').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('.elementor-element-35244bf4 > .elementor-widget-wrap').contains('Quality Assurance').click()
        cy.get('h1').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
        cy.go('back')
        cy.get('.elementor-element-d665472 > .elementor-widget-wrap').contains('Audio Testing').click()
        cy.get('h1').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
        cy.go('back')
        cy.get('.elementor-element-dfa4b52 > .elementor-widget-wrap').contains('Accessibility').click()
        cy.get('h1').contains('Accessibility Testing').should('be.visible')
        cy.url().should('include', 'accessibility')
        cy.go('back')
        cy.get('.elementor-element-3c076282 > .elementor-widget-wrap').contains('Data Services').click()
        cy.get('h1').contains('Data Services').should('be.visible')
        cy.url().should('include', 'data-services')
        cy.go('back')
        cy.get('h1').contains('Services').should('be.visible')
       
          cy.get('h2').contains('QA & Software Testing Services').should('be.visible')
          cy.get('.elementor-element-c790fc4 > :nth-child(1) > .elementor-col-100 > :nth-child(1)').each(() => {'Functional Testing',
          'Mobile App Testing',
          'Automation & Automated Testing',
          'Accessibility Testing (Section 508 and WCAG compliance)',
          'Real-Device Testing',
          'Beta Testing',
          'Regression Testing',
          'Usability Testing',
          'Livestream Testing',
          'Analytics Testing',
          'Location Testing',
          'Voice Testing',
          'Localization Testing',
          'Payments Testing',
          'Regression and Exploratory Testing',
          'AR/VR Testing',
          'Performance Testing',
          'API Testing',
          'Compatibility Testing & Cross Browser/OS System Testing',
          'Functional Testing and Acceptance Testing',
          'Test Design and Test Plans',
          'Decomp and Test Script Development',
          'QA and Manual Writing',
          'Graphic Uniformity of Web Pages and Applications'}).should('be.visible').log()
        cy.get('h2').contains('See for yourself').should('be.visible')
        cy.get('a').contains('View all case studies').click()
        cy.get('h1').contains('Case Studies').should('be.visible')
        cy.url().should('include', 'case-studies')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('AbbVie Case Study').click()
        cy.get('h1').contains('AbbVie Case Study').should('be.visible')
        cy.url().should('include', 'abbvie-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('ANC & TSA Case Study').click()
        cy.get('h1').contains('ANC & the TSA Case Study').should('be.visible')
        cy.url().should('include', 'anc-tsa-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('Aon Accessibility Audit Case Study').click()
        cy.get('h1').contains('Aon Accessibility Audit Case Study').should('be.visible')
        cy.url().should('include', 'aon-accessibility-audit-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('Aon Benefits Calculator Case Study').click()
        cy.get('h1').contains('Aon Benefits Calculator Case Study').should('be.visible')
        cy.url().should('include', 'aon-benefits-calculator')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('Bose Case Study').click()
        cy.get('h1').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('IDEXX Case Study').click()
        cy.get('h1').contains('IDEXX QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'idexx-case-study')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('JP Morgan Chase').click()
        cy.get('h1').contains('JP Morgan Chase QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'jp-morgan-chase')
        cy.go('back')
        cy.get('h3.elementor-post__title').contains('Zebra Case Study').click()
        cy.get('h1').contains('Zebra Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'zebra-case-study')
        cy.go('back')
        cy.get('.elementor-element-39c6fdf > .elementor-widget-container > p').click()
        cy.get('span.elementor-heading-title').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
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