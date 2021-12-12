import React, { Component } from 'react'
import '../css/App.css'
import HomeButton from './HomeButton'
import Nav from './Nav'
import Filter from './Filter'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      filteredMovies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(endpoints.movies)
      .then(response => response.json())
      .then(data => this.setState({
        allMovies: data.movies,
        filteredMovies: data.movies
      }))
      .catch(err => this.setState({
        error: err.message
      }))
  }

  filterMovies = (filterType) => {
    switch (filterType) {
      case 'descending':
        this.setState({ filteredMovies: this.state.allMovies.sort((a, b) => b.average_rating - a.average_rating) })
        break
      case 'ascending':
        this.setState({ filteredMovies: this.state.allMovies.sort((a, b) => a.average_rating - b.average_rating) })
        break
      case 'random':
        this.setState({ filteredMovies: this.state.allMovies })
        break
      default:
        this.setState({ filteredMovies: this.state.allMovies })
    }
  }

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.goToHomePage} />

        <Routes>
          <Route
            path="/"
            element={ <>
                        <Nav />
                        <Filter movies={this.state.filteredMovies} filterMovies={this.filterMovies}/>
                        <PosterGrid posters={this.state.filteredMovies} />
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
