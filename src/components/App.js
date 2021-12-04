// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../css/App.css';
import Nav from './Nav'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import movieData from '../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      moviePosters: movieData.movies,
      showAllMovies: true,
      moviePageId: ''
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

  render() {
    return (
      <main className="App">
        <Nav homeClick={this.goToHomePage}/>
        {
          this.state.showAllMovies ?
          <PosterGrid 
            posters={this.state.moviePosters} 
            posterClick={this.goToMoviePage}
          /> :
          <MovieDetails posters={this.state.moviePosters} id={this.state.moviePageId}/>
        }
      </main>
    )
  }
}

export default App;
