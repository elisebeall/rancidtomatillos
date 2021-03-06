import '../css/Filter.css'
import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()
    this.state = {
      filterType: 'reset'
    }
  }

  setSortOrder = (e) => {
    this.setState({ filterType: e.target.value })
    this.props.filterMovies(e.target.value)
  }

  render() {
    return (
      <form className="ratings-filter">
        <label htmlFor="ratings-filter">sort movies</label>
        <select
            className="ratings"
            name="ratings"
            id="ratings-filter"
            value={this.state.filterType}
            onChange={e => this.setSortOrder(e)}
        >
          <option value="reset"> sort movies... </option>
          <option value="descendingRating"> RATING: highest to lowest </option>
          <option value="ascendingRating"> RATING: lowest to highest </option>
          <option value="descendingDate"> DATE: newest to oldest </option>
          <option value="ascendingDate"> DATE: oldest to newest </option>
          <option value="random"> Randomize! </option>
        </select>
      </form>
    )
  }
}

export default Filter
