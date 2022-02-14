module.exports = class LoginPage{
    // page object model
    
    loginPage_username = '#txtUsername'
    loginPage_password = "#txtPassword"
    loginPage_loginButton = "#btnLogin"

    navigate(url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}