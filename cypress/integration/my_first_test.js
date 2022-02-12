/// <reference types="cypress" />


it('google test', ()=>{

    // visit --> go to url to test
    cy.visit("https://google.com")

    // get --> get class

    // type --> type keyword in search box --> {enter} is to enter
    // timeout --> set time out for actions
    cy.get(".gLFyf",
    // {timeout: 6000}
    ).type("Automation Step by Step{enter}")

    // wait for 4 seconds
    cy.wait(4000)

    // click to the Video box
    cy.contains('Video').click()
})


it.only("login test",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")

    cy.wait(6000)

    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > b').click()

    cy.get('#btnAdd').click()

    // find --> find descendant component in father component
    cy.get('fieldset > p').find("#btnSave").click()
})