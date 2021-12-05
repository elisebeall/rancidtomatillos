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
    <section>
      <header>
        <h1>{title}</h1>
        <div>
          <h2>{release_date}</h2>
          <h3>{runtime}</h3>
        </div>
        <div>
          {/* <img /> */}
          <p>⭐️</p>
          <h3>Rating</h3>
          <h3>{average_rating}</h3>
        </div>
        <div>
          {/* <img /> */}
          <p>$</p>
          <h3>Budget</h3>
          <h3>{budget}</h3>
        </div>
        <div>
          {/* <img /> */}
          <p>💲</p>
          <h3>Gross</h3>
          <h3>{revenue}</h3>
        </div>
      </header>
      <h3>{genres}</h3>
      <h3>{tagline}</h3>
      <p>{overview}</p>
      <img src={poster_path} alt={title}/>
      <img />
    </section>
  )
}

export default MovieDetails
