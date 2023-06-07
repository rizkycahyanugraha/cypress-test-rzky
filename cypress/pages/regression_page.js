export class RegressionPage{ 

    
    namaDepan = "input[placeholder='Masukkan nama depan']"
    namaBelakang = "input[placeholder='Masukkan nama belakang']"
    emailUser = "input[placeholder='Masukkan email anda']"
    nomorTelepon = "#phoneNumber"
    password = "input[placeholder='Masukkan kata sandi baru']"
    confirmPassword = "input[placeholder='Konfirmasi kata sandi']"




    navigate(url) {
        cy.visit(url)
    }
    
    inputNamadepan(depan){
        cy.get(this.namaDepan).type(depan)
    }
    
    inputNamabelakang(belakang) {
        cy.get(this.namaBelakang).type(belakang)
    }
    
    inputEmail(email){
        cy.get(this.emailUser).type(email)
    }
    
    inputNomor(nomor) {
        cy.get(this.nomorTelepon).type(nomor)
    }
    
    inputPassword(passwordUser){
        cy.get(this.password).type(passwordUser)
    }
    
    inputConfirm(confirmUser) {
        cy.get(this.confirmPassword).type(confirmUser)
    }
    
}
