import '../css/Movie.css'
import React, { Component, Fragment } from 'react'
import endpoints from '../endpoints'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount = () => {
    fetch(`${endpoints.movies}/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({
        movie: data.movie
      }))
      .catch(err => this.setState({
        error: err.message
      }))
  }

  render() {
    const {
      title,
      poster_path,
      backdrop_path,
      release_date,
      overview,
      genres,
      budget,
      revenue,
      runtime,
      tagline,
      average_rating
    } = this.state.movie

    const noData = 'Not available';

    return (
      <>
        {!this.state.movie.title ? <p>...</p> :
          <>
            <header className="movie-details-header">
              <h1 className="title">{title}</h1>
              <h2 className="release">{release_date.split('-')[0]}</h2>
              <h3 className="runtime">{runtime} mins</h3>
              <p className="star">⭐️</p>
              <h3 className="rating-label">Rating</h3>
              <h3 className="rating">{average_rating.toFixed(1)}</h3>
              <p className="dollar-sign1">💲</p>
              <h3 className="budget-label">Budget</h3>
              <h3 className="budget">{budget === 0 ? noData : budget}</h3>
              <p className="dollar-sign2">💲</p>
              <h3 className="gross-label">Gross</h3>
              <h3 className="gross">{revenue === 0 ? noData : revenue}</h3>
            </header>
            <h3 className="genres">{genres.join(' ⧫ ')}</h3>
            <h3 className="tagline">{tagline}</h3>
            <p className="overview">{overview}</p>
            <div className="visuals">
              <img className="poster" src={poster_path} alt={title}/>
              <img className="trailer" src="https://i.stack.imgur.com/PtbGQ.png" alt="trailer placeholder"/>
            </div>
          </>
        }
      </>
    )
  }
}

export default Movie
