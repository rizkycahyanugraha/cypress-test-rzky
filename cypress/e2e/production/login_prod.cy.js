import { LoginProd } from "../../pages/login_prod"


const loginPage = new LoginProd()

describe('test login', () => {

    const linkProd = "https://superkul.id"

  it('login gagal', () => {
    loginPage.navigate(linkProd)
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9003@mailll.comw")
    loginPage.enterPassword("Kebersamaan@1")
    loginPage.clickLogin()
    cy.wait(2000)  
    cy.contains('Tutup').click()
  })

  it('login salah password', () => {
    loginPage.navigate(linkProd)
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9003@gmail.com")
    loginPage.enterPassword("12123123")
    loginPage.clickLogin()
    cy.wait(2000)
    cy.contains('Tutup').click()
  })


  it('login password kurang dari 6', () => {
    loginPage.navigate(linkProd)
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9003@gmail.com")
    loginPage.enterPassword("1")
    loginPage.clickLogin()
    cy.wait(2000)
    cy.contains('Tutup').click()
  })

  it('login tanpa password', () => {
    loginPage.navigate(linkProd)
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9003@gmail.com")
    loginPage.enterPassword("{backspace}")
    loginPage.clickLogin()
    cy.wait(2000)
  })


  it('login berhasil', () => {
    loginPage.navigate(linkProd)
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9003@gmail.com")
    loginPage.enterPassword("Kebersamaan@1")
    loginPage.clickLogin()
  })
})