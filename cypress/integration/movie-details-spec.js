let movie4 = { "movie": { "id": 737173 } }
let videos4 = { "videos": [] }

describe('Rancid Tomatillos movie details load flow', () => {

  it('When the user visits the movie detail page, the title of the movie should be shown', () => {
    cy.fixture('movie-details1.json').as('movie1').then((movie1) => {
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie1.movie.id}`, {
        body: movie1
      })
    })
    cy.fixture('movie-details1.json').as('movie1').then((movie1) => {
      cy.visit(`localhost:3000/movie/${movie1.movie.id}`)
    })
    cy.fixture('movie-details1.json').as('movie1').then((movie1) => {
      cy.get('.title').should('contain', `${movie1.movie.title}`)
    })
  })

  it('If the movie details don\'t load, an error message should appear', () => {
    cy.fixture('movie-details2.json').as('movie2').then((movie2) => {
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie2.movie.id}`, {
        statusCode: 404,
        ok: false,
      })
    })

    cy.fixture('movie-details2.json').as('movie2').then((movie2) => {
      cy.visit(`localhost:3000/movie/${movie2.movie.id}`)
    })

    cy.get('.error').contains('Apologies! There was an issue. Please go back and try again.')
  })

  it('When the movie data detail (ie. budget) has no value, the user should see a message saying N/A', () => {
    cy.fixture('movie-details3.json').as('movie3').then((movie3) => {
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie3.movie.id}`, {
        body: movie3
      })
    })

    cy.fixture('movie-details3.json').as('movie3').then((movie3) => {
      cy.visit(`localhost:3000/movie/${movie3.movie.id}`)
    })

    cy.get('h3').should('contain', 'N/A')
  })

  it('When the user clicks the home button, the page should change to home and the URL should equal http://localhost:3000/', () => {
    cy.fixture('movie-details1.json').as('movie1').then((movie1) => {
      cy.visit(`localhost:3000/movie/${movie1.movie.id}`)
    })
    cy.get('.home-button').click()
    cy.url().should('include', '/')
    cy.get('.navbar').should('contain', 'Rancid Tomatillos')
  })

})

describe('Rancid Tomatillos movie trailer flow', () => {

  beforeEach(() => {
    cy.fixture('movie-details2.json').as('movie2').then((movie2) => {
      cy.visit(`localhost:3000/movie/${movie2.movie.id}`)
    })
  })

  it('When a user views the page, they should be shown a trailer.', () => {
    cy.fixture('videos2.json').as('videos2').then((videos2) => {
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${videos2.videos[0].movie_id}/trailer`, {
        body: videos2
      })
    })
    cy.get('iframe').should('be.visible')
  })

  it('When more than one trailer is available, they should be given buttons to select another trailer.', () => {
    cy.fixture('videos2.json').as('videos2').then((videos2) => {
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${videos2.videos[0].movie_id}/trailer`, {
        body: videos2
      })
    })
    cy.get('.video-selector').children().should('have.length', 5)
  })

  it('When no trailers are available, a message should be displayed.', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie4.movie.id}/trailer`, {
      body: videos4
    })
    cy.get('.video-selector').should('contain', 'There are no trailers available for this movie')
  })

})
