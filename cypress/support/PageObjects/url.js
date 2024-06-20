class Url
{
    homePage()
    {
       return cy.visit('https://aspiritech.org')
    }
    servicesPage()
    {
        return cy.visit('https://aspiritech.org/services/')
    }
    sqaPage()
    {
        return cy.visit('https://aspiritech.org/services/quality-assurance/')
    }
    onShore()
    {
        return cy.get('div.elementor-button-wrapper').contains('Learn How Aspiritech Unlocks QA Precision').should('have.attr', 'href', 'https://aspiritech.org/services/quality-assurance/onshore-software-quality-assurance-testing/')
    }
    accessibilityPage()
    {
        return cy.visit('https://aspiritech.org/services/accessibility/')
    }
    accessibilitybusinessCase()
    {
        return cy.get('div.elementor-button-wrapper').contains('Learn How Accessibility Drives ROI').should('have.attr', 'href', 'https://aspiritech.org/services/accessibility/business-case-for-accessibility/')
    }
    audiotestingPage()
    {
        return cy.visit('https://aspiritech.org/services/audio-testing/')
    }
    dataservicesPage()
    {
        return cy.visit('https://aspiritech.org/services/data-services/')
    }
    aspiritechAcademy()
    {
        return cy.visit('https://aspiritech.org/services/aspiritech-academy/')
    }
    mitsubishiLink()
    {
        return cy.get('[href="https://us.mitsubishielectric.com/en/sustainability/greater-community/meaf-top/index.html"]').contains('MEAF').click()
    }
    haapeLink()
    {
        return cy.get('[href="https://haape.org/"]').contains('HAAPE').click()
    }
    faqsPage()
    {
        return cy.visit('https://aspiritech.org/services/faqs/')
    }
    contactusPage()
    {
        return cy.visit('https://aspiritech.org/contact-us/')
    }
    capabilitiesStatement()
    {
        return cy.request('https://aspiritech.org/wp-content/uploads/2024/02/Aspiritech-Capabilities-Overview-1.pdf')
        .then((response) => {
            expect(response.headers['content-type']).to.include('application/pdf')
            // Handle the response if needed
            // For example, you can check the status code or perform assertions
        })
    }
}
export default Url