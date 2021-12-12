import '../css/Movie.css'
import React, { Component, Fragment } from 'react'
import endpoints from '../endpoints'
import Trailer from '../components/Trailer'
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

    const noData = 'Not Available'

    return (
      <>
        {!this.state.movie.title ? <p>...</p> :
        <section className="movie-details">
          <article className="text">
            <header className="header">
              <h1 className="title">{title}</h1>
              <div className="time-date">
                <h2 className="release">{release_date.split('-')[0]}</h2>
                <h3 className="runtime">{runtime} <span>minutes</span></h3>
              </div>
              <div className="rating">
                <img className="star" src={star} alt="star icon" />
                <h3 className="rating-label">Rating</h3>
                <h3 className="rating">{average_rating.toFixed(1)}</h3>
              </div>
              <div className="budget">
                <img className="dollar-sign1" src={dollarSign1} alt="dollar sign icon" />
                <h3 className="budget-label">Budget</h3>
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

      // <>
      //   <img className="backdrop backdrop-overlay" src={backdrop_path} alt="movie backdrop"/>
      //   {!this.state.movie.title ? <p>...</p> :
      //     <>
      //       <header className="movie-details-header">
      //         <h1 className="title">{title}</h1>
      //         <h2 className="release">{release_date.split('-')[0]}</h2>
      //         <h3 className="runtime">{runtime} <span>minutes</span></h3>
      //         <img className="star" src={star} alt="star icon" />
      //         <h3 className="rating-label">Rating</h3>
      //         <h3 className="rating">{average_rating.toFixed(1)}</h3>
      //         <img className="dollar-sign1" src={dollarSign1} alt="dollar sign icon" />
      //         <h3 className="budget-label">Budget</h3>
      //         <h3 className="budget">
      //           {budget === 0 ?
      //             <span>{noData}</span> :
      //             <>{(budget/1000000).toFixed(1)}<span>million</span></>
      //           }
      //         </h3>
      //         <img className="dollar-sign2" src={dollarSign2} alt="dollar sign icon" />
      //         <h3 className="gross-label">Gross</h3>
      //         <h3 className="gross">
      //           {revenue === 0 ?
      //             <span>{noData}</span> :
      //             <>{(revenue/1000000).toFixed(1)}<span>million</span></>
      //           }
      //         </h3>
      //         <h3 className="genres">{genres.join(' ⧫ ')}</h3>
      //       </header>
      //       <section className="movie-detail-text">
      //         <h3 className="tagline">{tagline}</h3>
      //         <p className="overview">{overview}</p>
      //       </section>
      //       <section className="visuals">
      //         <img className="poster" src={poster_path} alt={title} />
      //         <Trailer id={this.props.id} />
      //       </section>
      //     </>
      //   }
      // </>
