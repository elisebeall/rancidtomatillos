import '../css/MovieDetails.css'
import React, { Fragment } from 'react'
import Movie from './Movie'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()

  return (
    <section className="movie-details-grid">
      <Movie id={id} />
    </section>
  )
}

export default MovieDetails
