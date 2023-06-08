export class OrderPage {
    //Start input order
    samedayOrder = '.sameday-delivery-option > .label-radio'
    tambahPickup = '.input-location > .btn'
    date = '.react-datepicker__input-container > .input-text'
    time = ':nth-child(2) > .input-text'

    //Pickup
    inputPickup = '.input-area'
    inputPengirim = '#sender-name'
    inputNomorPengirim = '#phone-number'
    simpanPickup = '.save'

    //Drop
    clickDrop = '.input-location > .btn'
    inputAlamatDrop = `.input-field > :nth-child(2)`
    inputPenerima = '#receiver-name'
    inputNomorPenerima = '#phone-number'
    categoryItem = '.package-category > :nth-child(1)'
    weightItem = '#weight-package'
    lengthItem = '#lenght'
    widthItem = '#width'
    heightItem = '#height'
    slide = '.rc-slider-handle'
    simpanDrop = '.save'
    createOrder = '.order-1'
    //tmp Order
    createOrder2 = '.order-2'
    finalOrder = '.continue-payment'
    confirmOrder = '.swal2-confirm'

    clickSameday() {
        cy.get(this.samedayOrder).click()
    }

    clickDate() {
        cy.get(this.date).click({force: true})
    }

    clickTime() {
        cy.get(this.time).select('12:00').should('have.value', '12:00')
    }

    clickPickUp() {
        cy.get(this.tambahPickup).click()
    }

    input(args) {
        cy.get(this.clickDrop).click()
        cy.get(`.input-field > :nth-child(${args.index+2})`).type(args.alamat)
        cy.get(this.inputPenerima).type(args.nama)
    }

    inputAlamatP(alamatPengirim) {
        cy.get(this.inputPickup).type(alamatPengirim)
    }

    inputNamaP(namaSender){
        cy.get(this.inputPengirim).type(namaSender)
    }

    inputNomorP(nomorSender) {
        cy.get(this.inputNomorPengirim).type(nomorSender)
    }

    savePickup(){
        cy.get(this.simpanPickup).click()
    }

    inputAlamatN(){
        cy.get(this.clickDrop).click()
    }

    inputAlamatK(alamatPenerima, index){
        cy.get(`.input-field > :nth-child(${index+2})`).type(alamatPenerima)
    }

    inputNamaK(namaReceiver) {
        cy.get(this.inputPenerima).type(namaReceiver)
    }

    inputNomorK(nomorReceiver) {
        cy.get(this.inputNomorPenerima).type(nomorReceiver)
    }

    category(){
        cy.get(this.categoryItem).click()
    }

    inputWeight(weight){
        cy.get(this.weightItem).type(weight)
    }

    inputLength(length){
        cy.get(this.lengthItem).type(length)
    }

    inputWidth(width){
        cy.get(this.widthItem).type(width)
    }

    inputHeight(height){
        cy.get(this.heightItem).type(height)
    }

    slider() {
        cy.get(this.slide)
    }

    simpanDataPenerima() {
        cy.get(this.simpanDrop).click()
    }

    createtmpOrder(){
        cy.get(this.createOrder).click()
    }

    confirmOrder1(){
        cy.get(this.createOrder2).click()
    }

    confirmOrder2() {
        cy.get(this.finalOrder).click()
    }

    confirmOrder3() {
        cy.get(this.confirmOrder).click()
    }
}
