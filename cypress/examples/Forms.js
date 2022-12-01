///<reference types="Cypress" />

describe('Forms Test Suit', function(){
    it('Forms Test Case', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        //Adding firstname & Lastname
        cy.get('#firstName').type('UserFirstName')
        cy.get('#lastName').type('UserLastName')
        //Adding email
        cy.get('#userEmail').type('user@gmail.com')
        //Selecting gender
        cy.get('#gender-radio-1').check({force: true})
        //Entering mobile num
        cy.get('#userNumber').type('9477345403')
        //Picking DOB
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('December')
        cy.get('.react-datepicker__year-select').select('1996')
        cy.get('.react-datepicker__day--012').click()
        //Adding Subject
        cy.get('.subjects-auto-complete__value-container').type('Maths')
        //Checking hobbies
        cy.get('input[type="checkbox"]').check({force: true})
        //cy.get('input[type="checkbox"]').check('1',{force: true})
        //Uploading file
        cy.get('#uploadPicture').selectFile('C:/Users/jinthusan.baskaran/Downloads/sampleFile.jpeg')
        //Adding user address
        cy.get('#currentAddress').type('USerAddress')

        //Select State & City
        cy.xpath('//div[text()="Select State"]').click()
        cy.xpath('//div[@id="react-select-3-option-2"]').click()

        //Select City
        cy.xpath('//div[text()="Select City"]').should('be.visible')
        cy.xpath('//div[text()="Select City"]').click()
        cy.xpath('//div[@id="react-select-4-option-0"]').click()

        //Submit form
        cy.get('#submit').click({force: true})
        //Close confirmation page
        cy.get('#closeLargeModal').click({force:true})
        
    })
})