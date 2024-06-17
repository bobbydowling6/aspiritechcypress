class Body
{
    searchBose()
    {
        return cy.get('#elementor-search-form-8147f49').type('Bose{enter}')
    }
    searchContact()
    {
        return cy.get('#elementor-search-form-8147f49').clear().type('Contact{enter}')
    }
    searchDonation()
    {
        return cy.get('#elementor-search-form-8147f49').clear().type('Donation{enter}')
    }
    clientsToggle()
    {
        return cy.get('.elementor-element-5f13155 > .elementor-widget-container > .elementor-menu-toggle').click()
    }
    whyaspiritechToggle()
    {
        return cy.get('.elementor-element-7d64b0b > .elementor-widget-container > .elementor-menu-toggle').click()
    }
    resourcesToggle()
    {
        return cy.get('.elementor-element-542c894 > .elementor-widget-container > .elementor-menu-toggle').click()
    }
}
export default Body