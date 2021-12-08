// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../css/App.css'
import Nav from './Nav'
import HomeButton from './HomeButton'
import PosterGrid from './PosterGrid'
import MovieDetails from './MovieDetails'
import endpoints from '../endpoints'
import { Routes, Route } from 'react-router-dom';

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
            element={ <div>
                        <Nav />
                        <PosterGrid 
                          posters={this.state.moviePosters} />
                      </div>} />
          <Route 
            path="/movie/:id"
            element={<MovieDetails />}
          />
        </Routes>

      </main>
    )
  }
}

export default App;
