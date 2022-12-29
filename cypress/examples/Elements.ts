///<reference types="Cypress" />

describe('Elements Test Suit', function(){
    it('Text Box', function(){
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('UserFullName')
        cy.get('#userEmail').type('user@gmail.com')
        cy.get('#currentAddress').type('USerAddress')
        cy.get('#permanentAddress').type('USerPermanentAddress')
        cy.get('#submit').click({force: true})
        cy.get('.border').should('be.visible')
    })

    it('Check box', function(){
        cy.visit('https://demoqa.com/checkbox')
        cy.xpath('//span[@class="rct-checkbox"]').click()
        cy.xpath('//div[@id="result"]//child::span[1]').then(function(textAssert){
            expect(textAssert).to.have.text('You have selected :')

        })
        //Expand
        cy.xpath('//button[contains(@class, "rct-collapse-btn")]').click()
        cy.xpath('//li[contains(@class, "rct-node-collapsed")]').each(($e1, index, $list)=>{
            if($e1.text() === 'Desktop'){
                cy.xpath('//input[@id="tree-node-desktop"]').click({force:true})
            }
        })
    })

    it('Radio Button', function(){
        cy.visit('https://demoqa.com/radio-button')
        cy.xpath('//input[@id="yesRadio"]').check({force:true})
        cy.xpath('//input[@id="noRadio"]').should('be.disabled')
    })
    it('Button Clicks', function(){
        cy.visit('https://demoqa.com/buttons')
        //double click
        cy.xpath('//button[@id="doubleClickBtn"]').dblclick()
        cy.xpath('//p[@id="doubleClickMessage"]').then(function(textAssert){
            expect(textAssert).to.have.text('You have done a double click')
        })
        //right click
        cy.xpath('//button[@id="rightClickBtn"]').rightclick()
        cy.xpath('//p[@id="rightClickMessage"]').then(function(textAssert){
            expect(textAssert).to.have.text('You have done a right click')
        })
        //Click
        cy.xpath('//div[@class="mt-4"]//child::button [text()="Click Me"]').click()
        cy.xpath('//p [text()="You have done a dynamic click"]').then(function(textAssert){
            expect(textAssert).to.have.text('You have done a dynamic click')
        })
    })

    it('Web Tables', function(){
        cy.visit('https://demoqa.com/webtables')
        //check name with age
        cy.xpath('//*[@class="rt-tr -even"]//child::div').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Cantrell"))
            {
         
                cy.xpath('//*[@class="rt-tr -even"]//child::div').eq(index).next().then(function(age)
                {
                 const ageText=   age.text()
                 expect(ageText).to.equal('45')
                })
            }
         
        })
        //Check deleted row is not visible
        cy.xpath('//span[@id="delete-record-2"]').click()
        cy.xpath('//*[@class="rt-tr -even"]//child::div[1] [text()="Alden"]').should('not.exist')
    })
    //Navigate New Tabs
    it('Handling new Browser Tab', function () {
        cy.visit(Cypress.env('URL')+ '/links')
        cy.xpath('//*[@id="simpleLink"]').invoke('removeAttr', 'target').click()
        cy.url().should('not.include', 'links')
    })

    //assert request 
    it.only('Assert api call response code', function () {
        cy.visit(Cypress.env('URL')+ '/links')
        cy.xpath('//*[@id="bad-request"]').click()
        cy.request({method:'GET', url:'https://demoqa.com/bad-request', failOnStatusCode: false}).then(function(req){
            const stausCode = req.status
            //cy.log(req.status)
            cy.xpath('//*[@id="linkResponse"]//b[1]').then(function(browserCode){
                const browserStatusCode = browserCode.text()
                cy.log(browserCode.text())
                expect(stausCode).to.eq(browserStatusCode)
            })
        })
        cy.url().should('not.include', 'links')
    })

})
        

