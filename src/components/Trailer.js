<<<<<<< HEAD
const Trailer = ({ id }) => {
  return (
    <h3 className="trailer">This is where the trailer goes</h3>
  )
}

export default Trailer
=======
import '../css/Trailer.css'
import React, { Component } from 'react'
import endpoints from '../endpoints'
import VideoSelector from './VideoSelector'

class Trailer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      sites: [],
      selectedTrailer: 0,
      loading: true
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

  render() {
    return this.state.loading ? <p>...</p> :
     (
      <div>
        <VideoSelector vids={this.state.videos} onClick={() => this.selectVideo}/>
        { this.state.videos.length &&
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${this.state.videos[this.state.selectedTrailer].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        }
      </div>
    )
  }
}

export default Trailer

/*
Vimeo videos: "Lost Girls & Love Hotels" id: 479259, "Away" id: 597398
0 videos:
*/
>>>>>>> c74b0fb6eae3970f0dd55070d013b2435f12275d
