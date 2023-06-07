export class Corporate{
    loginPage_username = "input[placeholder='Enter email']"
    loginPage_password = "input[placeholder='Enter password']"
    masuk = ".item-container > .before-login > .btn-login"
    login = "button[type='submit']"
    profile = '.user-profile'
    corporate = '.request-coorporate'
    number = "input[name='monthly']"
    companyName = ':nth-child(4) > .input-text'
    address = '.address > div > .input-text'
    province = ':nth-child(2) > .mt-5 > .select-data > .addl-class__control > .addl-class__value-container > .addl-class__input-container'
    city = ':nth-child(3) > .mt-5'
    district = ':nth-child(4) > .mt-5'
    subdistrict = ':nth-child(5) > .mt-5'
    postal = ':nth-child(6) > .input-text'
    submitRequest = '.btn-submit-request'
  
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

    clickProfile() {
        cy.get(this.profile).click()
    }

    clickCorporate() {
        cy.get(this.corporate).click()
    }

    inputNumber(numberR = "") {
        cy.get(this.number).type(numberR, {force: true})
    }

    inputCompany(companyR = ""){
        cy.get(this.companyName).type(companyR)
    }

    inputAddress(addressR = ""){
        cy.get(this.address).type(addressR,{force: true})
    }

    inputProvince(provinceR = ""){
        cy.get(this.province).find("input").type(provinceR, {force: true})
    }

    inputCity(cityR = ""){
        cy.get(this.city).find("input").type(cityR, {force: true})
    }

    inputDistrict(districtR = ""){
        cy.get(this.district).find("input").type(districtR, {force: true})
    }

    inputSubdistrict(subdistrictR = ""){
        cy.get(this.subdistrict).find("input").type(subdistrictR, {force: true})
    }

    inputCode(postalR = ""){
        cy.get(this.postal).type(postalR)
    }

    clickRequest(){
        cy.get(this.submitRequest).click()
    }
}