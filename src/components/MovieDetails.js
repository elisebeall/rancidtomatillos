import '../css/MovieDetails.css'
import React, { Fragment } from 'react'
import Movie from './Movie'
import Trailer from './Trailer'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()

  return (
    <section className="movie-details-grid">
      <Movie id={id}/>
      <Trailer id={id}/>
    </section>
  )
}

export default MovieDetails
