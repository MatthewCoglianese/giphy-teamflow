const beforeEach = require("mocha")


describe('Navigate to page', () => {
    it("should navigate to the giphy web sight.", () => {

        cy.url().should('include', 'giphy')
    })
})

describe('Trending Section', () => {
    it("should have trending section", () => {

        cy.get(':nth-child(2) > .Container-sc-swtq0n > .Title-sc-kvmtvl').should('have.text', 'Trending')
    })

    it("should select an item from the trending area", () => {

        cy.get('li.bKPIpm:nth-child(1) > div:nth-child(1)')
            //.find('picture')  
            .find('picture')
            .find('img')
            .should('have.attr', 'alt')
            .then(($alt) => {
                const image1 = $alt
                cy.log(image1)
                //.should('have.css','atl')
                cy.get('li.bKPIpm:nth-child(1) > div:nth-child(1)')
                    .click()
                    .get('.KRS9L9BsuEdhF-ACKiX8x')
                    .find('img')
                    .should('have.attr', 'alt')
                    .then(($alt) => {
                        const image2 = $alt
                        expect(image2).to.eq(image1)
                    })
            })
    })
})
    describe('Search function', () => {
        it("should have a search box", () => {

            cy.get('.Input-sc-w75cdz').should('have.property', 'text')
        })

        it("should allow user to enter text in search", () => {
            cy.viewport(1920, 1080)
            cy.get('.Input-sc-w75cdz').type('morty').should('have.value', 'morty')
            cy.get('.search-button__SearchIcon-ndudpy-0 > img:nth-child(1)').click()
            cy.get('.Container-sc-ju2d4r').should('have.text', 'morty GIFs')
        })
    })
