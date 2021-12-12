import '../css/MovieDetails.css'
import React, { Fragment } from 'react'
import Movie from './Movie'
import { useParams } from 'react-router-dom'

const MovieDetails = ({ matchQuery }) => {
  const { search, id } = useParams()

  const getMovieId = () => {
    //if there's a search query, find the matching movieId
    if (search.length) {
      matchQuery(search)
    }
    return id;
    //if not, return the movie id from the URL
  }

  return (
    <section className="movie-details-grid">
      <Movie id={getMovieId} />
    </section>
  )
}

export default MovieDetails
