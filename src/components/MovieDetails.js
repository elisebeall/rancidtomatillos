import '../css/MovieDetails.css'

const MovieDetails = ({ posters, id }) => {
  const movie = posters.find(movie => {
    return movie.id === id
  })

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
  } = movie

  return (
    <section className="movie-details">
      <header className="movie-details-header">
        <h1 className="title">{title}</h1>
        <h2 className="release">{release_date.split('-')[0]}</h2>
        <h3 className="runtime">{runtime}</h3>
        <p className="star">⭐️</p>
        <h3 className="rating-label">Rating</h3>
        <h3 className="rating">{average_rating.toFixed(1)}</h3>
        <p className="dollar-sign1">$</p>
        <h3 className="budget-label">Budget</h3>
        <h3 className="budget">{budget}</h3>
        <p className="dollar-sign2">💲</p>
        <h3 className="gross-label">Gross</h3>
        <h3 className="gross">{revenue}</h3>
      </header>
      <h3 className="genres">{genres}</h3>
      <h3 className="tagline">{tagline}</h3>
      <p className="overview">{overview}</p>
      <div className="visuals">
        <img className="poster" src={poster_path} alt={title}/>
        <img className="trailer" src="https://i.stack.imgur.com/PtbGQ.png" alt="trailer placeholder"/>
      </div>
    </section>
  )
}

export default MovieDetails
