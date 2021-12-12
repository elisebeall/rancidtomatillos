import '../css/Movie.css'
import React, { Component, Fragment } from 'react'
import endpoints from '../endpoints'
import Trailer from '../components/Trailer'
import MovieData from '../components/MovieData'
import star from '../assets/star.png'
import dollarSign1 from '../assets/dollarSign1.png'
import dollarSign2 from '../assets/dollarSign2.png'


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

    return (
      <>
        {!this.state.movie.title ? <p>...</p> :
        <section className="movie-details">
          <img src={backdrop_path} alt="movie background" className="backdrop"/>
          <article className="text">
            <header className="header">
              <h1 className="title">{title}</h1>
                <div className="all-numbers">
                <div className="numbers">
                  <div className="number-text">
                    <h2 className="release">{release_date.split('-')[0]}</h2>
                    <h3 className="runtime">{runtime} <span>min</span></h3>
                  </div>
                </div>
                <div className="numbers">
                  <img className="star" src={star} alt="star icon" />
                  <MovieData label="Rating" value={average_rating} />
                </div>
                <div className="numbers">
                  <img className="dollar-sign1" src={dollarSign1} alt="dollar sign icon" />
                  <MovieData label="Budget" value={budget} />
                </div>
                <div className="numbers">
                  <img className="dollar-sign2" src={dollarSign2} alt="dollar sign icon" />
                  <MovieData label="Gross" value={revenue} />
                </div>
              </div>
            </header>
            <section className="content">
              <h3 className="genres">{genres.join(' ⧫ ')}</h3>
              <h3 className="tagline">{tagline}</h3>
              <p className="overview">{overview}</p>
            </section>
          </article>
          <article className="visuals">
            <img className="poster" src={poster_path} alt={title} />
            <Trailer id={this.props.id} />
          </article>
        </section>
        }
      </>
    )
  }
}

export default Movie
