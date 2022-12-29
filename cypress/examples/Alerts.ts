///<reference types="Cypress" />

describe('Alerts Test Suite', function(){
    it('Normal Alert', function(){
        cy.visit('https://demoqa.com/alerts')

        cy.xpath('//button[@id="alertButton"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('You clicked a button');
        })
    })

    it('Alert with timer', function(){
        cy.visit('https://demoqa.com/alerts')
        cy.xpath('//button[@id="timerAlertButton"]', { timeout: 6000 }).click()
        //cy.wait(6000)
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This alert appeared after 5 seconds');
         })
    }) 
    
    it('Alert with confirmation message',function(){
        cy.xpath('//button[@id="confirmButton"]').click()
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Do you confirm action?");
        });
    })

    it('Alert with prompt', function(){
        cy.window().then(win => {
        cy.stub(win, 'prompt').returns('My name is testUser')
        cy.xpath('//button[@id="promtButton"]').click();
        cy.xpath('//span[@class="text-success"]').contains('You entered My name is testUser');
        })
    })
}) 