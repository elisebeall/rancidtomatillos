import '../css/Search.css'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Search = ({ searchedMovies, searchMovies }) => {
  const [searchState, setSearchState] = useState(searchedMovies)
  const [queryState, setQueryState] = useState('')
  let [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e) => {
    setSearchState(e.target.value)
    searchMovies(e.target.value)
    setSearchParams({ search: e.target.value })
  }

  return (
    <>
      <input
        type="text"
        placeholder="search..."
        value={searchState}
        onChange={e => handleChange(e)}
      />
    </>
  )
}

export default Search
