import '../css/Search.css'
import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Search = ({ searchedMovies, searchMovies, setMovieId }) => {
  const [searchTerm, setSearchTerm] = useState(searchedMovies)
  const [queryState, setQueryState] = useState('')
  console.log('useParams', useParams())
  const { query } = useParams()

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    searchMovies(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQueryState(searchTerm)
    setMovieId(searchTerm)
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <NavLink to={`/?q=${query}`} >
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={e => handleChange(e)}
          />
        </NavLink>
      </form>
    </>
  )
}

export default Search
