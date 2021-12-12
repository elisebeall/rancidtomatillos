import '../css/Trailer.css'
import React, { Component } from 'react'
import endpoints from '../endpoints'
import VideoSelector from './VideoSelector'

class Trailer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      videos: [],
      selectedTrailer: 0,
    }
  }

  componentDidMount = () => {
    fetch(`${endpoints.movies}/${this.props.id}/videos`)
      .then(response => response.json())
      .then(data => this.setState({
        videos: data.videos
      }))
      .then(this.setState({loading: false}))
      .catch(err => this.setState({
        error: err.message
      }))
  }

  selectVideo = (e) => {
    const trailerIndex = e.target.innerText - 1
    this.setState({
      selectedTrailer: trailerIndex
    })
  }

  getSite = () => {
    let site = 'www.youtube.com/embed'
    if (this.state.videos[this.state.selectedTrailer].site === 'Vimeo') {
      site = 'player.vimeo.com/video'
    }
    return site
  }

  render() {
    return this.state.loading ? <p>...</p> :
     (
      <div className="trailor">
        <VideoSelector vids={this.state.videos} onClick={() => this.selectVideo}/>
        {this.state.videos.length &&
          <iframe
            src={`https://${this.getSite()}/${this.state.videos[this.state.selectedTrailer].key}`}
            width="560"
            height="315"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Movie Trailer">
          </iframe>
        }
      </div>
    )
  }
}

export default Trailer
