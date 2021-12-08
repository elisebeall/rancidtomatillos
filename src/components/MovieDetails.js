import '../css/MovieDetails.css'
import React from 'react'
import Movie from './Movie'
import Trailer from './Trailer'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const id = useParams().id

  return (
    <div>
      <Movie id={id}/>
      <Trailer id={id}/>
    </div>
  )
}

export default MovieDetails
