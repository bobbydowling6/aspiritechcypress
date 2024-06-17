class NavbarUrl 
{
    servicesurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/');
    }
    audiotestingurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/audio-testing/')
    }
    softwarequalityassuranceurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/quality-assurance/')
    }
    accessibilityurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/accessibility/')
    }
    dataservicesurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/data-services/')
    }
    neurogrowthtrainingurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/services/neurogrowth-training-services-for-companies-and-organizations/')
    }
    faqsurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/faqs/')
    }
    casestudiesurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/case-studies/')
    }
    contactusurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/contact-us/')
    }
    ourstoryurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/our-story/')
    }
    aboutusurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/about-us/')
    }
    leadershipurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/leadership/')
    }
    teammembersurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/team-members/')
    }
    careersurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/careers/')
    }
    supportourmissionurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/support-our-mission/')
    }
    newsresourcesurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/aspiritech-news-resources/')
    }
    newsurl()
    {
        return cy.url().should('eq', 'https://aspiritech.org/news/')
    }
    aspiritechpress()
    {
        return cy.url().should('eq', 'https://aspiritech.org/aspiritech-press/')
    }
    onthevergepodcast()
    {
        return cy.url().should('eq', 'https://aspiritech.org/on-the-verge-podcast/')
    }
    eventsurl()
    {
        cy.url().should('eq', 'https://aspiritech.org/events/')
    }
    suoprogramurl()
    {
        return cy.get('.elementor-nav-menu').contains('Stepping Up & Out Program').click({force: true});
    }
    neurodiversityresourcelibrary()
    {
        return cy.url().should('eq', 'https://aspiritech.org/neurodiversity-resources/')
    }
    aspiritechacademy()
    {
        return cy.url().should('eq', 'https://aspiritech.org/aspiritech-academy/')
    }
}
export default NavbarUrl