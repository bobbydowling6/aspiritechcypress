describe('On the Verge Podcast Page', () => {
    beforeEach(() => {
        cy.visit('https://aspiritech.org/services/on-the-verge-podcast/')
        cy.title().should('eq', 'On the Verge Podcast – Aspiritech')
        cy.get('.elementor-element-de24da2 > .elementor-widget-container > .elementor-heading-title').contains('On the Verge: Conversations with the Neurodiversity Movement').should('be.visible')
    })
    it('The user gets directed to Spotify to listen to podcast', () => {
        cy.get('.elementor-element-ccee8e2 > .elementor-widget-container > .elementor-heading-title').contains('Latest Episodes').should('be.visible')
        cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://open.spotify.com/show/3kNXJcIW8bEMDUCvQkDzgW"]').contains('Spotify').click()
        cy.get('[data-testid="showTitle"]').contains('On the Verge').should('be.visible')
        cy.title().should('eq', 'On the Verge | Podcast on Spotify')
        cy.url().should('include', 'show')
        cy.go('back')
    })
    it('The user gets directed to Apple Podcasts to listen to podcast', () => {
        cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://podcasts.apple.com/us/podcast/on-the-verge/id1741555211"]').contains('Apple').click()
        cy.get('.product-header__title').contains('On the Verge').should('be.visible')
        cy.title().should('eq', 'On the Verge on Apple Podcasts')
        cy.url().should('include', 'podcast')
        cy.go('back')
    })
    it('The user gets directed to iHeart Radio to listen to podcast', () => {
        cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://www.iheart.com/podcast/269-on-the-verge-168028584/"]').contains('iHeart').click()
        cy.get('[data-test="podcast-profile-heading"]').contains('On the Verge').should('be.visible')
        cy.title().should('eq', 'On the Verge | iHeart')
        cy.url().should('include', 'podcast')
        cy.go('back')
    })
    it('The user gets directed to Amazon Music to listen to podcast', () => {
        cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://music.amazon.com/podcasts/eb6c5bd0-9347-4a3d-9eb4-c0550bb3e7a7/on-the-verge"]').contains('Amazon Music').click()
        //cy.get('div.secondaryHeadline').contains('On the Verge').should('be.visible')
        cy.title().should('eq', 'On the Verge Podcast on Amazon Music')
        cy.url().should('include', 'podcasts')
        cy.go('back')
    })
    it('The user gets directed to YouTube to listen to podcast', () => {
        cy.get('.elementor-element-a3d3b51 > .elementor-widget-container > p > [href="https://www.youtube.com/playlist?list=PLnfduKObZ7mohUnu-rks9meMdspbKUsgs"]').contains('YouTube').click()
        cy.get('.metadata-wrapper > :nth-child(1) > #container > #text').contains('On the Verge').should('be.visible')
        cy.title().should('eq', 'On the Verge: Conversations with the Neurodiversity Movement - Presented by Aspiritech - YouTube')
        cy.url().should('include', 'playlist')
        cy.go('back')
    })
    it('User selects link, plays a podcast video and views video transcript', () => {
        cy.get('.elementor-element-eaabc5b > .elementor-widget-container > p > a').contains('Watch the episode video and read the transcript. »').click()
        cy.get('.elementor-element-aade95e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Episode 3').should('be.visible')
        cy.title().should('eq', 'On the Verge Episode 3: Autistic Representation with Scott Steindorff – Aspiritech')
        cy.url().should('include', 'episode-3')
        cy.get('h2 > span').contains('Episode Transcript').should('be.visible')
        cy.go('back')
        cy.get('.elementor-element-43bd676 > .elementor-widget-container > p > a').contains('Watch the episode video and view the transcript. »').click()
        cy.get('.elementor-element-aade95e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Episode 2').should('be.visible')
        cy.title().should('eq', 'On the Verge Episode 2: Sensory Gated Art with Amanda Hebert Hughes – Aspiritech')
        cy.url().should('include', 'episode-2')
        cy.get('h2 > span').contains('Episode Transcript').should('be.visible')
        cy.go('back')
        cy.get('.elementor-element-49fa451 > .elementor-widget-container > p > a').contains('Watch the episode video and view the transcript. »').click()
        cy.get('.elementor-element-aade95e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Episode 1').should('be.visible')
        cy.title().should('eq', 'On the Verge Episode 1: The Neurodiversity Employment Landscape with Rebecca Beam – Aspiritech')
        cy.url().should('include', 'episode-1')
        cy.get('h2 > span').contains('Episode Transcript').should('be.visible')
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

