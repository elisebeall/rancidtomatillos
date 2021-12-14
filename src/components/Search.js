import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = ({ searchedMovies, searchMovies }) => {
  const [searchState, setSearchState] = useState(searchedMovies)
  let [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e) => {
    setSearchParams({ search: e.target.value })
    setSearchState(e.target.value)
    searchMovies(e.target.value)
  }

  return (
      <input
        className="input"
        type="text"
        placeholder="search..."
        value={searchState}
        onChange={e => handleChange(e)}
      />
  )
}

export default Search
