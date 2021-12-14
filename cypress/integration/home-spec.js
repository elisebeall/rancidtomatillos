import movies from '../fixtures/movies.json'

describe('Rancid Tomatillos home page data load flow', () => {
    
    beforeEach(() => {
        cy.fixture('movies.json').as('movies')
    })
    
    it('When the user visits the home page, the title of the site should be displayed in the header.', () => {
        cy.visit('localhost:3000')
        cy.get('.navbar').contains('Rancid Tomatillos')
    })
    
    it('When a user visits the page, the movie posters should be display in a grid.', () => {
        cy.intercept('GET',  'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            ok: true,
            body: { movies },
        })
        cy.visit('localhost:3000')
        cy.get('.grid-posters')
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg')
    })
  
    it('When the user clicks the home button, the page scrolls back to the top.', () => {
        cy.visit('localhost:3000')
        cy.scrollTo('bottom')
        cy.get('.home-button').click()
        .window().its('scrollY').should('equal', 0)
    })

    it('If the movie posters data is unavailable (server errro), the user should see an error message.', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 500,
            ok: false,
            body: {},
        })
        cy.visit('localhost:3000')
        cy.get('.error').contains('Apologies!')
    })
})

describe('Rancid Tomatillos search flow', () => {

    beforeEach(() => {
        cy.fixture('movies.json').as('movies')
        cy.intercept('GET',  'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            ok: true,
            body: { movies },
        })
        cy.visit('localhost:3000')
    })

    it.only('this is a placeholder', () => {})

    it('When the user types into the search input, the movies are filtered by the value of the input.', () => {
        cy.get('.text-input').type('mul')
        cy.get('.poster-grid').children().should('have.length', 1)
    })
    
    it.skip('When the user deletes an input, the movies are filtered by the new value of the input.', () => {

    })
    
    it.skip('When typing into the search input, the URL should reflect the value of the search.', () => {

    })
    
    it.skip('When the user types a search value with no matches, a warning appears.', () => {

    })
})

describe('Rancid Tomatillos sort flow', () => {

    beforeEach(() => {
        cy.fixture('movies.json').as('movies')
        cy.intercept('GET',  'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            ok: true,
            body: { movies },
        })
        cy.visit('localhost:3000')
    })
    
    it('When the user selects the filter for Rating: high to low, the movies should change accordingly.', () => {
        cy.get('.ratings').select('descendingRating')
        cy.get('.poster-grid').find('img').first()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
        cy.get('.poster-grid').find('img').last()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg')
    })
    
    it('When the user selects the filter for Rating: low to high, the movies should change accordingly.', () => {
        cy.get('.ratings').select('ascendingRating')
        cy.get('.poster-grid').find('img').first()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg')
        cy.get('.poster-grid').find('img').last()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
    })
    
    it('When the user selects the filter for Date: newest to oldest, the movies should change accordingly.', () => {
        cy.get('.ratings').select('descendingDate')
        cy.get('.poster-grid').find('img').last()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg')
    })
    
    it('When the user selects the filter for Date: oldest to neweset, the movies should change accordingly.', () => {
        cy.get('.ratings').select('ascendingDate')
        cy.get('.poster-grid').find('img').first()
            .should('have.attr', 'src')
            .and('equal', 'https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg')
    })
    
    it('When the user selects a filter type for Randomize, the movies should change accordingly.', () => {
        cy.get('.ratings').select('random')
        cy.get('.poster-grid').children().should('have.length', 3)
    })
})