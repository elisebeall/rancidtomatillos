// import '../css/MovieDetails.css'
import React from 'react'
import Movie from './Movie'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()

  return (
    <section>
      <Movie id={id} />
    </section>
  )
}

export default MovieDetails
