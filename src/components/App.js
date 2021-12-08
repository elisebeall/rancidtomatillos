import React, { Component } from 'react'
import '../css/App.css'
import HomeButton from './HomeButton'
import Nav from './Nav'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route, Link } from 'react-router-dom'

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

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.goToHomePage}/>

        <Routes>
          <Route
            path="/"
            element={ <>
                        <Nav />
                        <PosterGrid
                          posters={this.state.moviePosters} />
                      </>} />
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
