import { RegressionPage } from "../../pages/regression_page";

const register = new RegressionPage();

describe ("Test register ", () => {
    const randomNum = Math.floor(Math.random() * 100);
    const randomPhone = Math.floor(Math.random() * 10000000000);
    const toEmail = `contoh${randomNum}@gmail.com`;
    const phoneNumber = `87${randomPhone}`;
    const productionLink = 'https://superkul.id'

    it ("Register nama", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("1")
        register.inputNamabelakang("1")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@1")
        cy.get('#agreement').click()
        cy.get('.btn-submit-register').click()
        cy.get('.form-register-container > :nth-child(1) > p')
        cy.get('.form-register-container > :nth-child(2) > p')
        cy.wait(2000)
    })

    it ("Register nomor gagal", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(toEmail)
        register.inputNomor(`87${Math.floor(Math.random() * 10000)}`)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@1")
        cy.get('#agreement').click()
        cy.get('.btn-submit-register').click()
        cy.get('.form-register-container > :nth-child(4) > p').should('contain', 'Nomor Handphone minimal 8 angka').scrollIntoView()
        cy.wait(2000)
    })

    it ("Register email salah", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(`${Math.floor(Math.random() * 100)}ogogogo@kocakdodotcom`)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@1")
        cy.get('#agreement').click()
        cy.get('.btn-submit-register').click()
        cy.wait(2000)
    })

    it ("Register password tidak sama", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@2")
        cy.get('#agreement').click()
        cy.get('.btn-submit-register').click()
        cy.wait(2000)
    })

    it ("Register password tidak pake nomor dan huruf besar", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("kebersamaan")
        register.inputConfirm("kebersamaan")
        cy.get('#agreement').click()
        cy.wait(2000)
    })

    it ("Register password kurang dari 8 ", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("K2")
        register.inputConfirm("K2")
        cy.get('#agreement').click()
        cy.wait(2000)
    })

    it ("Register tidak click checkbox", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Tester")
        register.inputNamabelakang("testing")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@2")
        cy.get('.btn-submit-register').click()
        cy.wait(2000)
    })

    it ("Register berhasil", { scrollBehavior: false }, () => {
        register.navigate(productionLink)
        cy.get('.item-container > .before-login > .btn-register').click()
        register.inputNamadepan("Testing")
        register.inputNamabelakang("Sudah lebaran")
        register.inputEmail(toEmail)
        register.inputNomor(phoneNumber)
        cy.get('.label-checkbox > span').scrollIntoView()
        register.inputPassword("Kebersamaan@1")
        register.inputConfirm("Kebersamaan@1")
        cy.get('#agreement').click()
        cy.get('.btn-submit-register').click()
        cy.wait(4000)
        cy.get('.swal2-confirm').click()
    })
})