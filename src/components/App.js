// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../css/App.css'
import Nav from './Nav'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'

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
        <Nav homeClick={this.goToHomePage}/>
        {this.state.error && <p>{this.state.error}</p>}
        {
          this.state.showAllMovies ?
          <PosterGrid
            posters={this.state.moviePosters}
            posterClick={this.goToMoviePage}
          /> :
          <MovieDetails id={this.state.moviePageId}/>
        }
      </main>
    )
  }
}

export default App;
