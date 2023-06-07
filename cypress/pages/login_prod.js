export class LoginProd{
loginPage_username = "input[placeholder='Enter email']"
    loginPage_password = "input[placeholder='Enter password']"
    masuk = ".item-container > .before-login > .btn-login"
    login = "button[type='submit']"

    navigate(url) {
        cy.visit(url)
    }

    clickMasuk() {
        cy.get(this.masuk).click()
    }

    enterUsername(username) {
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password = "") {
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.login).click()
    }
}