import '../css/Search.css'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Search = ({ searchedMovies, searchMovies, setMovieId }) => {
  const [searchState, setSearchState] = useState(searchedMovies)
  const [queryState, setQueryState] = useState('')
  let [searchParams, setSearchParams] = useSearchParams()
  const { query } = useParams()

  console.log('Search -> useParams()', useParams())

  useEffect(() => {
    setQueryState(query)
  },[query])

  const handleChange = (e) => {
    setSearchState(e.target.value)
    searchMovies(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQueryState(searchState)
    //setMovieId(queryState)
    setSearchParams({ search: searchState })
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="search..."
          value={searchState}
          onChange={e => handleChange(e)}
        />
      </form>
    </>
  )
}

export default Search
