import Url from "../../support/PageObjects/url";
import NavbarUrl from "../../support/PageObjects/navbarurl";
describe('Navigation Mobile Menu Tests', () => {
  let url = new Url()
  let navbarurl = new NavbarUrl()
context('iPhone 10 resolution with portrait viewing mode', () => {
    beforeEach(() => {
      url.homePage()
      cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
      cy.get('h3').contains('Support Our Neurodiverse Team').should('be.visible')
      cy.viewport('iphone-x')
    })
    it('should click through the menu items', () => {
      cy.get('.elementor-nav-menu').should('not.be.visible')
      cy.section('Services Section')
      cy.get('.elementor-nav-menu').contains('Services').click({ force: true });
      navbarurl.servicesurl()
      cy.title().should('eq', 'Services – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Audio & Hardware Testing').click({ force: true });
      navbarurl.audiotestingurl()
      cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Software Quality Assurance').click({ force: true });
      navbarurl.softwarequalityassuranceurl()
      cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Accessibility & UX').click({ force: true });
      navbarurl.accessibilityurl()
      cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Data Services').click({ force: true });
      navbarurl.dataservicesurl()
      cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
      cy.get('.elementor-nav-menu').contains('NeuroGrowth Training').click({ force: true });
      navbarurl.neurogrowthtrainingurl()
      cy.title().should('eq', 'NeuroGrowth Training Services: You already have a neurodiverse team – Aspiritech')
      cy.get('.elementor-nav-menu').contains('FAQs').click({ force: true });
      navbarurl.faqsurl()
      cy.title().should('eq', 'Frequently Asked Questions (FAQs) – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Case Studies & Clients').click({ force: true });
      navbarurl.casestudiesurl()
      cy.title().should('eq', 'Case Studies – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Contact Us').click({ force: true });
      navbarurl.contactusurl()
      cy.title().should('eq', 'Contact Us – Aspiritech')
  
      cy.section('Our Story Section')
      cy.get('.elementor-nav-menu').contains('Our Story').click({ force: true });
      navbarurl.ourstoryurl()
      cy.title().should('eq', 'Our Story – Aspiritech')
      cy.get('.elementor-nav-menu').contains('About Us').click({ force: true });
      navbarurl.aboutusurl()
      cy.title().should('eq', 'About Us – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Leadership').click({ force: true });
      navbarurl.leadershipurl()
      cy.title().should('eq', 'Leadership – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Team Members').click({ force: true });
      navbarurl.teammembersurl()
      cy.title().should('eq', 'Team Members – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Careers').click({ force: true });
      navbarurl.careersurl()
      cy.title().should('eq', 'Careers – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Support Our Mission').click({ force: true });
      navbarurl.supportourmissionurl()
      cy.title().should('eq', 'Support Our Mission – Aspiritech')
  
      cy.section('News & Resources Section')
      cy.get('.elementor-nav-menu').contains('News & Resources').click({ force: true });
      navbarurl.newsresourcesurl()
      cy.title().should('eq', 'News & Resources – Aspiritech')
      cy.get('.elementor-nav-menu.sm-vertical').contains('News').click({ force: true });
      navbarurl.newsurl()
      cy.title().should('eq', 'News – Aspiritech')
      cy.get('.elementor-nav-menu').contains('In the Press').click({ force: true });
      navbarurl.aspiritechpress()
      cy.title().should('eq', 'Aspiritech Press – Aspiritech')
      cy.get('.elementor-nav-menu').contains('On the Verge Podcast').click({ force: true });
      navbarurl.onthevergepodcast()
      cy.title().should('eq', 'On the Verge Podcast – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Events').click({ force: true });
      navbarurl.eventsurl()
      cy.title().should('eq', 'Events – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Stepping Up & Out Program').click({ force: true });
      navbarurl.suoprogramurl()
      cy.title().should('eq', 'About the Stepping Up & Out (SUO) Program – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Neurodiversity Resource Library').click({ force: true });
      navbarurl.neurodiversityresourcelibrary()
      cy.title().should('eq', 'Neurodiversity Resource Library – Aspiritech')
  
      cy.get('.elementor-item').contains('Aspiritech Academy').click({ force: true })
      navbarurl.aspiritechacademy()
      cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
      cy.go('back')
      cy.get('a').contains('Contact Us').click({ force: true })
      cy.get('h2').contains('We’d Love to Hear From You').should('be.visible')
      cy.title().should('eq', 'Contact Us – Aspiritech')
      navbarurl.contactusurl()
      cy.go('back')
    });
  })

context('iPhone 10 resolution with landscape viewing mode', () => {
    beforeEach(() => {
      url.homePage()
      cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
      cy.get('h3').contains('Support Our Neurodiverse Team').should('be.visible')
      cy.viewport('iphone-x', "landscape")
    })
    it('should click through the menu items', () => {
      cy.get('.elementor-nav-menu').should('not.be.visible')
      cy.section('Services Section')
      cy.get('.elementor-nav-menu').contains('Services').click({ force: true });
      navbarurl.servicesurl()
      cy.title().should('eq', 'Services – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Audio & Hardware Testing').click({ force: true });
      navbarurl.audiotestingurl()
      cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Software Quality Assurance').click({ force: true });
      navbarurl.softwarequalityassuranceurl()
      cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Accessibility & UX').click({ force: true });
      navbarurl.accessibilityurl()
      cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Data Services').click({ force: true });
      navbarurl.dataservicesurl()
      cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
      cy.get('.elementor-nav-menu').contains('NeuroGrowth Training').click({ force: true });
      navbarurl.neurogrowthtrainingurl()
      cy.title().should('eq', 'NeuroGrowth Training Services: You already have a neurodiverse team – Aspiritech')
      cy.get('.elementor-nav-menu').contains('FAQs').click({ force: true });
      navbarurl.faqsurl()
      cy.title().should('eq', 'Frequently Asked Questions (FAQs) – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Case Studies & Clients').click({ force: true });
      navbarurl.casestudiesurl()
      cy.title().should('eq', 'Case Studies – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Contact Us').click({ force: true });
      navbarurl.contactusurl()
      cy.title().should('eq', 'Contact Us – Aspiritech')
  
      cy.section('Our Story Section')
      cy.get('.elementor-nav-menu').contains('Our Story').click({ force: true });
      navbarurl.ourstoryurl()
      cy.title().should('eq', 'Our Story – Aspiritech')
      cy.get('.elementor-nav-menu').contains('About Us').click({ force: true });
      navbarurl.aboutusurl()
      cy.title().should('eq', 'About Us – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Leadership').click({ force: true });
      navbarurl.leadershipurl()
      cy.title().should('eq', 'Leadership – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Team Members').click({ force: true });
      navbarurl.teammembersurl()
      cy.title().should('eq', 'Team Members – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Careers').click({ force: true });
      navbarurl.careersurl()
      cy.title().should('eq', 'Careers – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Support Our Mission').click({ force: true });
      navbarurl.supportourmissionurl()
      cy.title().should('eq', 'Support Our Mission – Aspiritech')
  
      cy.section('News & Resources Section')
      cy.get('.elementor-nav-menu').contains('News & Resources').click({ force: true });
      navbarurl.newsresourcesurl()
      cy.title().should('eq', 'News & Resources – Aspiritech')
      cy.get('.elementor-nav-menu.sm-vertical').contains('News').click({ force: true });
      navbarurl.newsurl()
      cy.title().should('eq', 'News – Aspiritech')
      cy.get('.elementor-nav-menu').contains('In the Press').click({ force: true });
      navbarurl.aspiritechpress()
      cy.title().should('eq', 'Aspiritech Press – Aspiritech')
      cy.get('.elementor-nav-menu').contains('On the Verge Podcast').click({ force: true });
      navbarurl.onthevergepodcast()
      cy.title().should('eq', 'On the Verge Podcast – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Events').click({ force: true });
      navbarurl.eventsurl()
      cy.title().should('eq', 'Events – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Stepping Up & Out Program').click({ force: true });
      navbarurl.suoprogramurl()
      cy.title().should('eq', 'About the Stepping Up & Out (SUO) Program – Aspiritech')
      cy.get('.elementor-nav-menu').contains('Neurodiversity Resource Library').click({ force: true });
      navbarurl.neurodiversityresourcelibrary()
      cy.title().should('eq', 'Neurodiversity Resource Library – Aspiritech')
  
      cy.get('.elementor-item').contains('Aspiritech Academy').click({ force: true })
      navbarurl.aspiritechacademy()
      cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
      cy.go('back')
      cy.get('a').contains('Donate').click()
      cy.get('h1').contains('Support Our Mission').should('be.visible')
      cy.title().should('eq', 'Support Our Mission – Aspiritech')
      navbarurl.supportourmissionurl()
      cy.go('back')
      cy.get('a').contains('Contact Us').click({ force: true })
      cy.get('h2').contains('We’d Love to Hear From You').should('be.visible')
      cy.title().should('eq', 'Contact Us – Aspiritech')
      navbarurl.contactusurl()
      cy.go('back')
    })
  })
})