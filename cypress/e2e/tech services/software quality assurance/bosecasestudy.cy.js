import Url from "../../../support/PageObjects/url"
import Brokenlinks from "../../../support/PageObjects/brokenlinks"
describe('Bose Case Study Page', () => {
    let testData = require("../../../fixtures/hsforms.json")
    let url = new Url()
    let brokenLinks = new Brokenlinks()
    beforeEach(() => {
        url.sqaPage()
        cy.title().should('eq', 'Software Quality Assurance – Aspiritech')
        cy.get('h1').contains('Software Quality Assurance').should('be.visible')
        cy.url().should('include', 'quality-assurance')
    })
    it('passes', () => {
        cy.get('h3.elementor-post__title').contains('Bose Case Study').click()
        cy.get('h1').contains('Bose Hardware QA & Product Excellence Case Study').should('be.visible')
        cy.url().should('include', 'bose-case-study')
        cy.get('#hs-form-iframe-0')
        cy.intercept('//js.hsforms.net/forms/embeded/v2.js', 'fixture:hsforms.json')
        cy.document().then(document => {
            const script = document.createElement('script')
            script.charset='utf-8'
            script.type = 'text/javascript'
            script.src = '//js.hsforms.net/forms/embeded/v2.js'
            document.body.appendChild(script)
        })
        cy.window().then(win => {
            const hbspt = win.hbspt = win.hbspt || {}
            hbspt.forms = hbspt.forms || {}
            hbspt.forms.create = cy.stub().as('createForm')
            hbspt.forms.create({
                region: "na1",
                portalId: "24338451",
                formId: "5ecc7705-fc84-4d9b-a2b0-8cca9376ba98"
            })
        })
        cy.get('@createForm').should('have.been.calledOnce')
        // cy.get('#firstname-5ecc7705-fc84-4d9b-a2b0-8cca9376ba98').type(testData.firstname)
        // cy.get('#label-lastname-5ecc7705-fc84-4d9b-a2b0-8cca9376ba98').type(testData.lastname)
        // cy.get('#company-5ecc7705-fc84-4d9b-a2b0-8cca9376ba98').type(testData.companyname)
        // cy.get('#email-5ecc7705-fc84-4d9b-a2b0-8cca9376ba98').type(testData.businessemail)
    })
    brokenLinks.option1()
})