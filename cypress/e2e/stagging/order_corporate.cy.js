import { OrderPage } from "../../pages/order_page";
import { LoginPage } from "../../pages/login_page";


const orderPage = new OrderPage()
const loginPage = new LoginPage()

const dropData = [
    {
        inputAlamatK: "Gedung Crystal of Knowledge Jl. Letjen DR. Sjarif Thajeb Pondok Cina Beji, Depok City, West Java 16424, Indonesia{downarrow}{enter}",
        inputNamaK: "gagah",
        inputNomorK: "87780166354",
        inputWeight: "1",
        inputLength: "1",
        inputWidth: "2",
        inputHeight: "1" 
    },
    {
        inputAlamatK: "Cinere Depok City West Java Indonesia{downarrow}{enter}",
        inputNamaK: "gagah",
        inputNomorK: "87780166354",
        inputWeight: "1",
        inputLength: "1",
        inputWidth: "2",
        inputHeight: "1" 
    }
]

describe('buat orderan superkul', () => {
    it('login berhasil', () => {
        loginPage.navigate("https://superkul.my.id")
        loginPage.clickMasuk()
        loginPage.enterUsername("rizkynugraha9003@gmail.com")
        loginPage.enterPassword("Kebersamaan@1")
        loginPage.clickLogin()
        cy.wait(8000)
        orderPage.clickSameday()
        orderPage.clickDate()
        cy.get('.react-datepicker__day--008').click()
        // cy.get('.react-datepicker__day--007')
        cy.get(':nth-child(2) > .input-text').scrollIntoView()
        orderPage.clickTime()
        cy.wait(2000)
        orderPage.clickPickUp()
        orderPage.inputAlamatP("Jl. Raya Sawangan No.1 Rangkapan Jaya Pancoran Mas Depok City, West Java 16435, Indonesia{enter}")
        orderPage.inputNamaP("Gagah")
        orderPage.inputNomorP("87780166354")
        orderPage.savePickup()

        // Drop 1 

        for (let i = 0; i < dropData.length; i++) {
            // orderPage.inputAlamatN()
             cy.wait(2000)
             orderPage.input({
                alamat: dropData[i].inputAlamatK,
                nama: dropData[i].inputNamaK,
                nomor: dropData[i].inputNomorK,
                index: i
             })
            // orderPage.inputAlamatK(dropData[i].inputAlamatK, i)
            // orderPage.inputNamaK(dropData[i].inputNamaK)
            orderPage.inputNomorK(dropData[i].inputNomorK)
            orderPage.category()
            orderPage.inputWeight(dropData[i].inputWeight)
            orderPage.inputLength(dropData[i].inputLength)
            orderPage.inputWidth(dropData[i].inputWidth)
            orderPage.inputHeight(dropData[i].inputHeight)
            orderPage.slider()
            orderPage.simpanDataPenerima()     
        }
       

        orderPage.createtmpOrder()
        cy.wait(2000)
        orderPage.confirmOrder1()
        orderPage.confirmOrder2()
        orderPage.confirmOrder3()
    })
})