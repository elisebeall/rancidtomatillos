// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../css/App.css'
// import Nav from './Nav'
import HomeButton from './HomeButton'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      moviePosters: [],
      showAllMovies: true,
      moviePageId: '',
      error: ''
    }
  }

  goToMoviePage = (movieId) => {
    this.setState({
      showAllMovies: false,
      moviePageId: movieId
    })
  }

  goToHomePage = () => {
    this.setState({
      showAllMovies: true,
    })
  }

  componentDidMount = () => {
    fetch(endpoints.movies)
      .then(response => response.json())
      .then(data => this.setState({
        moviePosters: data.movies
      }))
      .catch(err => this.setState({
        error: err.message
      }))
  }

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.goToHomePage}/>

        <Routes>
          <Route 
            path="/" 
            element={<PosterGrid 
                        posters={this.state.moviePosters} 
                        posterClick={this.goToMoviePage}/>}
          />
          <Route 
            path="/movie/:id"
            element={<MovieDetails
                        id={this.state.moviePageId}/>}
          />
        </Routes>

      </main>
    )
  }
}

export default App;
