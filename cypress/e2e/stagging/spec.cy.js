import { LoginPage } from "../../pages/login_page"


const loginPage = new LoginPage()

describe('test login', () => {
  // it('login gagal', () => {
  //   loginPage.navigate("https://superkul.my.id")
  //   loginPage.clickMasuk()
  //   loginPage.enterUsername("dizzie@mailll.comw")
  //   loginPage.enterPassword("Kebersamaan@1")
  //   loginPage.clickLogin()
  //   cy.wait(2000)  
  //   cy.contains('Tutup').click()
  // })

  // it('login salah password', () => {
  //   loginPage.navigate("https://superkul.my.id")
  //   loginPage.clickMasuk()
  //   loginPage.enterUsername("dizzie@mail.com")
  //   loginPage.enterPassword("12123123")
  //   loginPage.clickLogin()
  //   cy.wait(2000)
  //   cy.contains('Tutup').click()
  // })


  // it('login password kurang dari 6', () => {
  //   loginPage.navigate("https://superkul.my.id")
  //   loginPage.clickMasuk()
  //   loginPage.enterUsername("dizzie@mail.com")
  //   loginPage.enterPassword("1")
  //   loginPage.clickLogin()
  //   cy.wait(2000)
  //   cy.contains('Tutup').click()
  // })

  // it('login tanpa password', () => {
  //   loginPage.navigate("https://superkul.my.id")
  //   loginPage.clickMasuk()
  //   loginPage.enterUsername("dizzie@mail.com")
  //   loginPage.enterPassword("{backspace}")
  //   loginPage.clickLogin()
  //   cy.wait(2000)
  // })


  it('login berhasil', () => {
    loginPage.navigate("https://superkul.my.id")
    loginPage.clickMasuk()
    loginPage.enterUsername("rizkynugraha9001@gmail.com")
    cy.wait(2000)
    // .then(() => {
    //   fetch('https://api.spacexdata.com/v3/missions')
    //   .then((res) => res.json())
    //   .then((data) => {
    //   console.log(data)
    //   })
    // })
    loginPage.enterPassword("Kebersamaan@1")
    loginPage.clickLogin()
  })
})
  
