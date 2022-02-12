it('learning assertion',()=>{
    cy.visit("https://example.cypress.io/")

    cy.contains("get").click()

    // Implicit assertion

    // Generally, we use Implicit assertions when we want to:

    // Assert multiple validations about the same subject.
    // Alter the subject before making the assertions on the subject.

    // should-contain --> check if the button contain the word "Button"
    // should-have:
    // .class --> check if button have class query-btn
    // should-be: check state of button
    // should-equal: check attribute value 
    // and --> chained assertion
    cy.get('#query-btn')
    .should("contain","Button")
    .should("have.class","query-btn")
    .should("be.visible")
    

    cy.get("#query-btn").invoke("attr","id")
    .should("equal","query-btn")

    cy.get("#query-btn")
    .should("contain","Button")
    .and("have.class","query-btn")


    // Explicit assertions

    // Generally, You will be using "Explicit assertions" when you want to:
    // Perform some custom logic before making the assertions on the given subject.
    // Perform multiple assertions against the same subject.

    expect(true).to.be.true

    let name = "Phuong"
    expect(name).to.be.equal("Phuong")


    assert.equal(4,4,"Not equal")

    assert.strictEqual(4,4,"Not equal")

})