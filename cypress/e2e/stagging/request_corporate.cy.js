import { Corporate } from "../../pages/corporate_page";
import { LoginPage } from "../../pages/login_page";

const loginPage = new LoginPage()
const corporatePage = new Corporate()

describe('Request Corporate', () => {
    it('Berhasil request corporate' ,{ scrollBehavior: false }, () => {
        loginPage.navigate("https://superkul.my.id")
        loginPage.clickMasuk()
        loginPage.enterUsername("rizkynugraha9001@gmail.com")
        loginPage.enterPassword("Kebersamaan@1")
        loginPage.clickLogin()
        cy.wait(3000)
        corporatePage.clickProfile()
        cy.wait(2000)
        corporatePage.clickCorporate()
        cy.wait(2000)
        cy.get('.upload-icon > img').click().then(() => {
            cy.get('input[type="file"]').attachFile('berry.jpeg', { mimeType: 'image/jpeg' });
          });
        corporatePage.inputNumber("11")
        corporatePage.inputCompany("Company")
        cy.get('.form-body > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        corporatePage.inputAddress("Jalan panjang")
        corporatePage.inputProvince("DKI{downarrow}{enter}")
        corporatePage.inputCity("Barat{downarrow}{enter}")
        corporatePage.inputDistrict("jeruk{downarrow}{enter}")
        corporatePage.inputSubdistrict("utara{downarrow}{downarrow}{enter}")
        corporatePage.inputCode("2000")
        corporatePage.clickRequest()
    })
})