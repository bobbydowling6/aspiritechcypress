
describe('Navigation Menu Test', () => {
  beforeEach(() => {
    cy.visit('https://aspiritech.org')
    cy.title().should('eq', 'Aspiritech – Build it. Break it. Our team tests it. Software QA & Data Services')
    cy.get('h3').contains('Support Our Neurodiverse Team').should('be.visible')
  })
  it('should click through the menu items', () => {
    cy.section('Services Section')
    cy.get('.elementor-nav-menu').contains('Services').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/');
    cy.title().should('eq', 'Services – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Audio & Hardware Testing').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/audio-testing/')
    cy.title().should('eq', 'Audio & Hardware Testing: Speakers, Headphones, & Connectivity – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Software Quality Assurance').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/quality-assurance/')
    cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Accessibility & UX').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/accessibility/')
    cy.title().should('eq', 'Accessibility Testing: Design, UX, Usability, & WCAG Conformance – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Data Services').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/data-services/')
    cy.title().should('eq', 'Data Services: Data Annotation, Data Labeling, and Data Validation. – Aspiritech')
    cy.get('.elementor-nav-menu').contains('NeuroGrowth Training').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/services/neurogrowth-training-services-for-companies-and-organizations/')
    cy.title().should('eq', 'NeuroGrowth Training Services: You already have a neurodiverse team – Aspiritech')
    cy.get('.elementor-nav-menu').contains('FAQs').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/faqs/')
    cy.title().should('eq', 'Frequently Asked Questions (FAQs) – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Case Studies & Clients').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/case-studies/')
    cy.title().should('eq', 'Case Studies – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Contact Us').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/contact-us/')
    cy.title().should('eq', 'Contact Us – Aspiritech')

    cy.section('Our Story Section')
    cy.get('.elementor-nav-menu').contains('Our Story').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/our-story/')
    cy.title().should('eq', 'Our Story – Aspiritech')
    cy.get('.elementor-nav-menu').contains('About Us').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/about-us/')
    cy.title().should('eq', 'About Us – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Leadership').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/leadership/')
    cy.title().should('eq', 'Leadership – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Team Members').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/team-members/')
    cy.title().should('eq', 'Team Members – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Careers').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/careers/')
    cy.title().should('eq', 'Careers – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Support Our Mission').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/support-our-mission/')
    cy.title().should('eq', 'Support Our Mission – Aspiritech')

    cy.section('News & Resources Section')
    cy.get('.elementor-nav-menu').contains('News & Resources').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/aspiritech-news-resources/')
    cy.title().should('eq', 'News & Resources – Aspiritech')
    cy.get('.elementor-nav-menu.sm-vertical').contains('News').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/news/')
    cy.title().should('eq', 'News – Aspiritech')
    cy.get('.elementor-nav-menu').contains('In the Press').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/aspiritech-press/')
    cy.title().should('eq', 'Aspiritech Press – Aspiritech')
    cy.get('.elementor-nav-menu').contains('On the Verge Podcast').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/on-the-verge-podcast/')
    cy.title().should('eq', 'On the Verge Podcast – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Events').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/events/')
    cy.title().should('eq', 'Events – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Stepping Up & Out Program').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/featured/about-the-stepping-up-out-suo-program/')
    cy.title().should('eq', 'About the Stepping Up & Out (SUO) Program – Aspiritech')
    cy.get('.elementor-nav-menu').contains('Neurodiversity Resource Library').click({force: true});
    cy.url().should('eq', 'https://aspiritech.org/neurodiversity-resources/')
    cy.title().should('eq', 'Neurodiversity Resource Library – Aspiritech')
   
    cy.get('.elementor-item').contains('Aspiritech Academy').click({force: true})
    cy.url().should('eq', 'https://aspiritech.org/aspiritech-academy/');
    cy.title().should('eq', 'Aspiritech Academy – Aspiritech')
    cy.go('back')
    cy.get('a').contains('Donate').click()
    cy.get('h1').contains('Support Our Mission').should('be.visible')
    cy.title().should('eq', 'Support Our Mission – Aspiritech')
    cy.url().should('eq', 'https://aspiritech.org/support-our-mission/')
    cy.go('back')
    cy.get('a').contains('Contact Us').click({force: true})
    cy.get('h2').contains('We’d Love to Hear From You').should('be.visible')
    cy.title().should('eq', 'Contact Us – Aspiritech')
    cy.url().should('eq', 'https://aspiritech.org/contact-us/')
    cy.go('back')
  });
});

