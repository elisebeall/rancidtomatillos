import '../css/MovieDetails.css'
import React from 'react'
import Movie from './Movie'
import { useParams } from 'react-router-dom'

const MovieDetails = ({ matchQuery }) => {
  console.log(useParams())
  const { search, id } = useParams()

  console.log('search', search)

  const getMovieId = () => {
    if (search.length) {
      matchQuery(search)
    }
    return id
  }

  return (
    <section className="movie-details-grid">
      <Movie id={id} />
    </section>
  )
}

export default MovieDetails
