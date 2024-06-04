describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/')
        cy.title().should('eq', 'Services – Aspiritech')
        cy.get('.elementor-element-1068126 > .elementor-widget-container > .elementor-heading-title').contains('Services').should('be.visible')
        cy.url().should('include', 'services')
    })
    it('passes', () => {
        cy.get('.elementor-element-3132c8b > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('.elementor-element-0670cb8 > .elementor-widget-container > .elementor-heading-title').contains('Quality Assurance, Accessibility, & Data Services').should('be.visible')
        cy.get('.elementor-element-6a46db7 > .elementor-widget-container > :nth-child(3) > a').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('.elementor-element-35244bf4 > .elementor-widget-wrap').contains('Quality Assurance').click()
        cy.get('.elementor-element-3f7eeaa > .elementor-widget-container > .elementor-heading-title').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
        cy.go('back')
        cy.get('.elementor-element-d665472 > .elementor-widget-wrap').contains('Audio Testing').click()
        cy.get('.elementor-element-68c0fc70 > .elementor-widget-container > .elementor-heading-title').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
        cy.go('back')
        cy.get('.elementor-element-dfa4b52 > .elementor-widget-wrap').contains('Accessibility').click()
        cy.get('.elementor-element-4fb348f1 > .elementor-widget-container > .elementor-heading-title').contains('Accessibility Testing').should('be.visible')
        cy.url().should('include', 'accessibility')
        cy.go('back')
        cy.get('.elementor-element-3c076282 > .elementor-widget-wrap').contains('Data Services').click()
        cy.get('.elementor-element-63b8939c > .elementor-widget-container > .elementor-heading-title').contains('Data Services').should('be.visible')
        cy.url().should('include', 'data-services')
        cy.go('back')
        cy.get('.elementor-element-cca89cf > .elementor-widget-container > .elementor-heading-title').contains('Technical Services').should('be.visible')
       
          cy.get('.elementor-element-5d56a49 > .elementor-widget-container > .elementor-heading-title').contains('QA & Software Testing Services').should('be.visible')
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
        cy.get('.elementor-element-6bfc22a > .elementor-widget-container > .elementor-heading-title').contains('See for yourself').should('be.visible')
        cy.get('.elementor-element-dc9ff34 > .elementor-widget-container > .elementor-heading-title > a').contains('View all case studies').click()
        cy.get('.elementor-element-04c4dba > .elementor-widget-container > .elementor-heading-title').contains('Case Studies').should('be.visible')
        cy.url().should('include', 'case-studies')
        cy.go('back')
        cy.get('.post-9976 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('AbbVie Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('AbbVie Case Study').should('be.visible')
        cy.url().should('include', 'abbvie-case-study')
        cy.go('back')
        cy.get('.post-10868 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('ANC & TSA Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('ANC & the TSA Case Study').should('be.visible')
        cy.url().should('include', 'anc-tsa-case-study')
        cy.go('back')
        cy.get('.post-9974 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Aon Accessibility Audit Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Aon Accessibility Audit Case Study').should('be.visible')
        cy.url().should('include', 'aon-accessibility-audit-case-study')
        cy.go('back')
        cy.get('.post-9962 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Aon Benefits Calculator Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Aon Benefits Calculator Case Study').should('be.visible')
        cy.url().should('include', 'aon-benefits-calculator')
        cy.go('back')
        cy.get('.post-3353 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Bose Case Study').click()
        cy.get('.elementor-element-fce111c > .elementor-widget-container > .elementor-heading-title').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')
        cy.go('back')
        cy.get('.post-4362 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('IDEXX Case Study').click()
        cy.get('.elementor-element-1b0ceec4 > .elementor-widget-container > .elementor-heading-title').contains('IDEXX QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'idexx-case-study')
        cy.go('back')
        cy.get('.post-4368 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('JP Morgan Chase').click()
        cy.get('.elementor-element-13eee0c0 > .elementor-widget-container > .elementor-heading-title').contains('JP Morgan Chase QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'jp-morgan-chase')
        cy.go('back')
        cy.get('.post-4374 > .elementor-post__card > .elementor-post__text > .elementor-post__title').contains('Zebra Case Study').click()
        cy.get('.elementor-element-2bbb5014 > .elementor-widget-container > .elementor-heading-title').contains('Zebra Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'zebra-case-study')
        cy.go('back')
        cy.get('.elementor-element-39c6fdf > .elementor-widget-container > p').click()
        cy.get('.elementor-element-68f10f8 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Contact us').should('be.visible')
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