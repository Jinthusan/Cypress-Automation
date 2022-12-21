///<reference types="Cypress" />
import FormPage from '../support/POM/FormPage'

describe('Forms Test Suit', function(){

    before(function(){
        cy.fixture('example').then(function(data){
           this.data= data
        })
    })
    it('Forms Test Case', function(){

        const formPage=new FormPage()
        cy.visit('https://demoqa.com/automation-practice-form')
       // cy.visit(Cypress.env('URL')+ '/automation-practice-form')
        //Adding firstname & Lastname
        //cy.get('#firstName').type(this.data.fname)
        formPage.getFirstName().type('UserFirstName')
        //cy.pause()
        formPage.getLastName().type('UserLastName')
        //Adding email
        formPage.getEmail().type('user@gmail.com')
        //Selecting gender
        formPage.getGender().check({force: true})
        //Entering mobile num
        formPage.getPhoneNum().type('9477345403')
        //Picking DOB
        formPage.getDOB().click()
        formPage.getMonth().select('December')
        formPage.getYear().select('1996')
        formPage.getDate().click()
        //Adding Subject
        formPage.getSubject().type('Maths')
        //Checking hobbies
        formPage.getHobbies().check({force: true})
        //cy.get('input[type="checkbox"]').check('1',{force: true})
        //Uploading file
        formPage.getUploadPicture().selectFile('C:/Users/jinthusan.baskaran/Downloads/sampleFile.jpeg')
        //Adding user address
        formPage.getAddress().type('USerAddress')

        //Select State & City
        // formPage.getState().click()
        // formPage.getStateClick().click()

        //Select City
        formPage.getCityClick().should('be.visible')
        formPage.getCityClick().click()
        formPage.getCity().click()

        //Submit form
        formPage.getSubmitForm().click({force: true})
        //Close confirmation page
        formPage.getCloseForm().click({force:true})
    })
})