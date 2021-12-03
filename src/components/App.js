// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../css/App.css';
import Nav from './Nav'
import PosterGrid from './PosterGrid'
import movieData from '../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      moviePosters: movieData.movies
    }
  }

  render() {
    return (
      <main className="App">
        <Nav />
        <PosterGrid posters={this.state.moviePosters}/>
      </main>
    )
  }
}

export default App;
