class FormPage{

    getFirstName(){
        return cy.get('#firstName')
    }
    getLastName(){
        return cy.get('#lastName')
    }
    getEmail(){
        return cy.get('#userEmail')
    }
    getGender(){
        return cy.get('#gender-radio-1')
    }
    getPhoneNum(){
        return cy.get('#userNumber')
    }
    getDOB(){
        return cy.get('#dateOfBirthInput')
    }
    getMonth(){
        return cy.get('.react-datepicker__month-select')
    }
    getYear(){
        return cy.get('.react-datepicker__year-select')
    }
    getDate(){
        return cy.get('.react-datepicker__day--012')
    }
    getSubject(){
        return cy.get('.subjects-auto-complete__value-container')
    }
    getHobbies(){
        return cy.get('input[type="checkbox"]')
    }
    getUploadPicture(){
        return cy.get('#uploadPicture')
    }
    getAddress(){
        return cy.get('#currentAddress')
    }
    getStateClick(){
        return cy.xpath('//div[text()="Select State"]')
    }
    getState(){
        return cy.xpath('//div[@id="react-select-3-option-2"]')
    }
    getCityClick(){
        return cy.xpath('//div[text()="Select City"]')
    }
    getCity(){
        return cy.xpath('//div[@id="react-select-4-option-0"]')
    }
    getSubmitForm(){
        return cy.get('#submit')
    }
    getCloseForm(){
        return cy.get('#closeLargeModal')
    }
}
export default FormPage;