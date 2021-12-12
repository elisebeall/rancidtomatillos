import React, { Component } from 'react'
import '../css/App.css'
import HomeButton from './HomeButton'
import Nav from './Nav'
import Search from './Search'
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
      searchedMovies: [],
      movieId: '',
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
      case 'descendingRating':
        this.setState({
          filteredMovies: this.state.allMovies.sort((a, b) => b.average_rating - a.average_rating)
        })
        break
      case 'ascendingRating':
        this.setState({
          filteredMovies: this.state.allMovies.sort((a, b) => a.average_rating - b.average_rating)
        })
        break
      case 'descendingDate':
        this.setState({
          filteredMovies: this.state.allMovies.sort((a, b) => {
            const aNum = a.release_date.split('-').join('')
            const bNum = b.release_date.split('-').join('')
            return bNum - aNum
          })
        })
        break
      case 'ascendingDate':
        this.setState({
          filteredMovies: this.state.allMovies.sort((a, b) => {
            const aNum = a.release_date.split('-').join('')
            const bNum = b.release_date.split('-').join('')
            return aNum - bNum
          })
        })
        break
      case 'random':
        const shuffle = (movies) => {
          let currentIndex = movies.length
          let randomIndex

          while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [movies[currentIndex], movies[randomIndex]] = [movies[randomIndex], movies[currentIndex]]
          }
          return movies
        }
        this.setState({ filteredMovies: shuffle(this.state.allMovies) })
        break
      default:
        this.setState({ filteredMovies: this.state.allMovies })
    }
  }

  searchMovies = (searchTerm) => {
    let filteringMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    this.setState({ filteredMovies: filteringMovies })
  }

  setMovieId = (query) => {
    //console.log('search -> setMovieChoice(query)', query)
    // this.setState({ searchKey: query })
    // console.log('setMovieChoice -> this.state.searchKey :', this.state.searchKey)
    this.setState({
      movieId: this.state.allMovies.find(movie => movie.title.toLowerCase().includes(query.toLowerCase())).id
    })
    console.log('this.state.movieID :', this.state.movieID)
  }

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.goToHomePage} />

        <Routes>
        {!this.state.movieId ?
          <Route
            path="/"
            element={ <>
                        <Nav />
                        <Search
                          searchedMovies={this.state.searchedMovies}
                          searchMovies={this.searchMovies}
                          setMovieId={this.setMovieId}
                        />
                        <Filter
                          movies={this.state.filteredMovies}
                          filterMovies={this.filterMovies}
                        />
                        <PosterGrid
                          posters={this.state.filteredMovies}
                        />
                      </> }
          /> :
          <Route
            path="/?q=:query"
            element= { <>
                        <Nav />
                        <Search
                          searchedMovies={this.state.searchedMovies}
                          searchMovies={this.searchMovies}
                        />
                        <Filter
                          movies={this.state.filteredMovies}
                          filterMovies={this.filterMovies}
                        />
                        <MovieDetails matchQuery={this.setMovieId} />
                      </> }
            />
          }
          <Route
            path="/movie/:id"
            element={<MovieDetails matchQuery={this.setMovieId} />}
          />
        </Routes>

      </main>
    )
  }
}

export default App
