import React, { Component } from 'react'
import '../css/App.css'
import HomeButton from './HomeButton'
import Nav from './Nav'
import Loading from './Loading'
import Error from './Error'
import Search from './Search'
import Filter from './Filter'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      filteredMovies: [],
      searchedMovies: [],
      loading: true,
      errorStatus: '',
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    fetch(endpoints.movies)
      .then(response => {
        if(!response.ok) {
          throw new Error ({
            status: response.status,
            message: response.statusText
          })
        } return response.json()
      })
      .then(data => {
          this.setState({
          allMovies: data.movies,
          filteredMovies: data.movies,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          errorStatus: err.status,
          errorMessage: err.message,
          loading: false
        })
      })
  }

  handleHomeClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

          while (currentIndex !== 0) {
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

  render() {
    return (
      <main className="App">
        <HomeButton homeClick={this.handleHomeClick} />

        <Routes>
          <Route
            path="/"
            element={ <>
                        <Nav />
                        <div className="search-filter">
                          <Search
                            searchedMovies={this.state.searchedMovies}
                            searchMovies={this.searchMovies}
                            setMovieId={this.setMovieId}
                          />
                          <Filter
                            movies={this.state.filteredMovies}
                            filterMovies={this.filterMovies}
                          />
                        </div>
                        {this.state.loading ?
                          <Loading isLoading={this.state.loading} /> :
                          <>
                            {this.state.error ?
                              <Error errorStatus={this.state.errorStatus} errorMessage={this.state.errorMessage} /> :
                              <PosterGrid posters={this.state.filteredMovies} />
                            }
                          </>
                        }
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
