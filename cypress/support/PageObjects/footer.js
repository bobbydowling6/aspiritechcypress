class Footer
{
    annualReport2015()
    {
        return cy.contains('a', '2015').click()
    }
    annualReport2016()
    {
        return cy.contains('a', '2016').click()
    }
    annualReport2017()
    {
        return cy.contains('a', '2017').click()
    }
    annualReport2018()
    {
        return cy.contains('a', '2018').click()
    }
    annualReport2019()
    {
        return cy.contains('a', '2019').click()
    }
    annualReport2020()
    {
        return cy.contains('a', '2020').click()
    }
    annualReport2021()
    {
        return cy.contains('a', '2021').click()
    }
    annualReport2022()
    {
        return cy.get('[href="https://issuu.com/aspiritech/docs/annual_report_2022_2_"]').click()
    }
    siteMap()
    {
        return cy.get('.elementor-element-f5e176b > .elementor-widget-container > :nth-child(1) > a').contains('Sitemap').click()
    }
    privacy()
    {
        return cy.get('.elementor-widget-container > :nth-child(2) > a').contains('Privacy').click()
    }
    backToTop()
    {
        return cy.get('.elementor-widget-container > :nth-child(3) > a').contains('Back to top').click()
    }
}
export default Footer