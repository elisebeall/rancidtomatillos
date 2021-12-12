import React, { Component } from 'react'
import '../css/App.css'
import HomeButton from './HomeButton'
import Nav from './Nav'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      moviePosters: [],
      error: ''
    }
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

  handleHomeClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // document.PosterGrid.scrollTop = 0;
  }

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.handleHomeClick} />

        <Routes>
          <Route
            path="/"
            element={ <>
                        <Nav />
                        <PosterGrid posters={this.state.moviePosters} />
                      </> }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />
        </Routes>

      </main>
    )
  }
}

export default App
