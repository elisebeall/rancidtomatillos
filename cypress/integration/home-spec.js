import movies from '../fixtures/movies.json'

describe('Rancid Tomatillos home page data load flow', () => {
    
    beforeEach(() => {
        cy.fixture('movies.json').as('movies')
    })
    
    it('When the user visits the home page, the title of the site should be displayed in the header.', () => {
        cy.visit('localhost:3000')
        cy.get('.navbar').contains('Rancid Tomatillos')
    })
    
    // Home button
    // it('', () => {
        
        // })
        
        // Sad path 500 error
    it('', () => {
        cy.visit('localhost:3000')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            body: { 
                status: 503,
             }
        })
        cy.get('.error').contains('Apologies!')
    })

    // it.skip('', () => {
    //     cy.intercept('GET', 'localhost:3000', {
    //         body: { 
    //             status: 503,
    //          }
    //     })
    // })

    // it('', () => {
        
    // })

})

// describe('Rancid Tomatillos search flow', () => {

//     beforeEach(() => {
//         cy.visit('localhost:3000')
//         cy.fixture('movies.json').as('movies')
//     })

//     it('When the user types into the search input, the movies are filtered by the value of the input.', () => {
//         cy.visit('localhost:3000')
//         cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//             body: { movies }
//         })
//     })
    
//     it('When the user deletes an input, the movies are filtered by the new value of the input.', () => {
//         cy.visit('localhost:3000')
//         cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//             body: { movies }
//         })
//     })
    
//     it('', () => {
//         cy.visit('localhost:3000')
//         cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//             body: { movies }
//         })
//     })
// })