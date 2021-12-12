import '../css/Filter.css'
import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super()
    this.state = {
      filterType: 'random'
    }
  }

  setSortOrder = (e) => {
    this.setState({ filterType: e.target.value })
    this.props.filterMovies(e.target.value)
  }

  render() {
    return (
      <form className="ratings-filter">
        <label for="ratings-filter">sort movies by ratings</label>
        <select
            name="ratings"
            id="ratings-filter"
            value={this.state.filterType}
            onChange={e => this.setSortOrder(e)}
        >
          <option value="random" selected> -- random -- </option>
          <option value="descending"> -- highest to lowest -- </option>
          <option value="ascending"> -- lowest to highest -- </option>
        </select>
      </form>
    )
  }
}

export default Filter
