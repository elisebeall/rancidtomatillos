import '../css/Movie.css'
import React, { Component, Fragment } from 'react'
import Loading from './Loading'
import Error from './Error'
import Trailer from '../components/Trailer'
import endpoints from '../endpoints'
import star from '../assets/star.png'
import dollarSign1 from '../assets/dollarSign1.png'
import dollarSign2 from '../assets/dollarSign2.png'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      errorStatus: '',
      errorMessage: '',
      loading: true
    }
  }

  componentDidMount = () => {
    fetch(`${endpoints.movies}/${this.props.id}`)
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

    const noData = 'Not Available'

    return (
      <>
        <img className="backdrop backdrop-overlay" src={backdrop_path} alt="" />
        {this.state.loading ? <Loading /> :
          <>
          {this.state.error ?
            <Error errorStatus={this.state.error} errorMessage={this.state.error} /> :
            <>
              <header className="movie-details-header">
                <h1 className="title">{title}</h1>
                <h2 className="release">{release_date.split('-')[0]}</h2>
                <h3 className="runtime">{runtime} <span>minutes</span></h3>
                <img className="star" src={star} alt="star icon" />
                <h3 className="rating-label">Rating</h3>
                <h3 className="rating">{average_rating.toFixed(1)}</h3>
                <img className="dollar-sign1" src={dollarSign1} alt="dollar sign icon" />
                <h3 className="budget-label">Budget</h3>
                <h3 className="budget">
                  {budget === 0 ?
                    <span>{noData}</span> :
                    <>{(budget/1000000).toFixed(1)}<span>million</span></>
                  }
                </h3>
                <img className="dollar-sign2" src={dollarSign2} alt="dollar sign icon" />
                <h3 className="gross-label">Gross</h3>
                <h3 className="gross">
                  {revenue === 0 ?
                    <span>{noData}</span> :
                    <>{(revenue/1000000).toFixed(1)}<span>million</span></>
                  }
                </h3>
                <h3 className="genres">{genres.join(' ⧫ ')}</h3>
              </header>
              <section className="movie-detail-text">
                <h3 className="tagline">{tagline}</h3>
                <p className="overview">{overview}</p>
              </section>
              <section className="visuals">
                <img className="poster" src={poster_path} alt={title} />
                <Trailer id={this.props.id} />
              </section>
            </>
          }
          </>
        }
      </>
    )
  }
}

export default Movie
