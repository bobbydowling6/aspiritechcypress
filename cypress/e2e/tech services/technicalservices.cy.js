import Url from "../../support/PageObjects/url"
import Brokenlinks from "../../support/PageObjects/brokenlinks"
describe('template spec', () => {
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.servicesPage()
        cy.title().should('eq', 'Services – Aspiritech')
        cy.get('h2').contains('Services').should('be.visible')
        cy.url().should('include', 'services')
    })
    it('passes', () => {
        cy.get('a.elementor-button').contains('Find Out More!').click()
        cy.get('span').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('h2').contains('Quality Assurance, Accessibility, & Data Services').should('be.visible')
        cy.get('a').contains('contact us').click()
        cy.get('span').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
        cy.get('h2').contains('Capabilities').should('be.visible')
        cy.get('span.elementor-button-content-wrapper').contains('Quality Assurance').click()
        cy.get('h1').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
        cy.go('back')
        cy.get('span.elementor-button-content-wrapper').contains('Audio Testing').click()
        cy.get('h1').contains('Audio & Hardware Testing: Speakers, Headphones, & Connectivity').should('be.visible')
        cy.url().should('include', 'audio-testing')
        cy.go('back')
        cy.get('span.elementor-button-content-wrapper').contains('Accessibility').click()
        cy.get('h1').contains('Accessibility Testing').should('be.visible')
        cy.url().should('include', 'accessibility')
        cy.go('back')
        cy.get('span.elementor-button-content-wrapper').contains('Data Services').click()
        cy.get('h1').contains('Data Services').should('be.visible')
        cy.url().should('include', 'data-services')
        cy.go('back')
        cy.get('h2').contains('Technical Services').should('be.visible')
        cy.get('div.elementor-widget-wrap').each(() => {'Manual and Automated Testing', 
        'Software and Hardware Testing', 'Data Integrity and Migration', 
        'Accessibility & ADA Compliance', 'UX/UI, Responsive, & Device Testing', 
        'Training Academy'}).should('be.visible')
          cy.get('h2').contains('QA & Software Testing Services').should('be.visible')
          cy.get('div.elementor-widget-wrap').each(() => {'Functional Testing',
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
        cy.get('a.yellow').click()
        cy.get('span.elementor-heading-title').contains('Contact us').should('be.visible')
        cy.url().should('include', 'contact-us')
        cy.go('back')
    })
    brokenLinks.option1()
})