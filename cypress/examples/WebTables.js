///<reference types="Cypress" />
describe('Web Tables', function(){
    it('Normal Alert', function(){
        cy.visit(Cypress.env('URL')+ '/webtables')
        //cy.visit('https://demoqa.com/webtables')

        cy.xpath('//div[@class="rt-tr -odd"]//*[@class="rt-td"] [1]').each(($el, index, $list) =>{
            const tableText = $el.text()
            if(tableText.includes('Kierra')){
                cy.xpath('//div[@class="rt-tr -odd"]//*[@class="rt-td"] [1]').eq(index).next().then(function(tTextEle){
                    const tableText2 = tTextEle.text()
                    expect(tableText2).to.contains('Gentry')
                })
            }
        })
    })
}) 