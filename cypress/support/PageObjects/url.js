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
    mitsubishiLink2()
    {
        return cy.get('[href="https://us.mitsubishielectric.com/en/sustainability/greater-community/meaf-top/index.html"]').contains('Mitsubishi Electric America Foundation').click()
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
    aboutusPage()
    {
        return cy.visit('https://aspiritech.org/services/about-us/')
    }
    eventsPage()
    {
        return cy.visit('https://aspiritech.org/events/')
    }
    careersPage()
    {
        return cy.visit('https://aspiritech.org/services/careers/')
    }
    suoEmail()
    {
        return cy.get('[href="mailto:SUO@aspiritech.org"] > span')
    }
    leadershipPage()
    {
        return cy.visit('https://aspiritech.org/services/leadership/')
    }
    ourstoryPage()
    {
        return cy.visit('https://aspiritech.org/services/our-story/')
    }
    supportourmissionPage()
    {
        return cy.visit('https://aspiritech.org/services/support-our-mission/')
    }
    termsLink()
    {
        return cy.get('[href="https://www.givelively.org/terms"] > span').contains('Terms').click()
    }
    privacyLink()
    {
        return cy.get('[href="https://www.givelively.org/privacy"] > span').contains('Privacy').click()
    }
    giveLively()
    {
       return cy.get('a').contains('support@givelively.org').should('be.visible')
    }
    teamMembers()
    {
        return cy.visit('https://aspiritech.org/services/team-members/')
    }
    inthepressPage()
    {
        return cy.visit('https://aspiritech.org/aspiritech-press/')
    }
    neuroDiversityPage()
    {
        return cy.visit('https://aspiritech.org/neurodiversity-resources/')
    }
    newsPage()
    {
        return cy.visit('https://aspiritech.org/category/news/')
    }
    newsResourcesPage()
    {
        return cy.visit('https://aspiritech.org/services/aspiritech-news-resources/')
    }
    podcastPage()
    {
        return cy.visit('https://aspiritech.org/services/on-the-verge-podcast/')
    }
    spotifyUrl()
    {
        return cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://open.spotify.com/show/3kNXJcIW8bEMDUCvQkDzgW"]').contains('Spotify').click()
    }
    appleUrl()
    {
        return cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://podcasts.apple.com/us/podcast/on-the-verge/id1741555211"]').contains('Apple').click()
    }
    iHeartUrl()
    {
        return cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://www.iheart.com/podcast/269-on-the-verge-168028584/"]').contains('iHeart').click()
    }
    amazonUrl()
    {
        return cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://music.amazon.com/podcasts/eb6c5bd0-9347-4a3d-9eb4-c0550bb3e7a7/on-the-verge"]').contains('Amazon Music').click()
    }
    youTubeUrl()
    {
        return cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://www.youtube.com/playlist?list=PLnfduKObZ7mohUnu-rks9meMdspbKUsgs"]').contains('YouTube').click()
    }
    suoprogramPage()
    {
        return cy.visit('https://aspiritech.org/featured/about-the-stepping-up-out-suo-program/')
    }
    photo1Url()
    {
        return cy.get('[href="https://aspiritech.org/wp-content/uploads/2022/11/SUO-stepping-up-out-team-photo02-martial-arts.jpg"] > .elementor-gallery-item__content').click()
    }
    photo2Url()
    {
        return cy.get('[href="https://aspiritech.org/wp-content/uploads/2022/11/SUO-stepping-up-out-team-photo35-PacMan.jpg"] > .elementor-gallery-item__content').click()
    }
    photo3Url()
    {
        return cy.get('[href="https://aspiritech.org/wp-content/uploads/2022/11/SUO-stepping-up-out-team-photo36-O-Neils-Wells-Feb-21-2020.jpg"] > .elementor-gallery-item__content')
    }
}
export default Url