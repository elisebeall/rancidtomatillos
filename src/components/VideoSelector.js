import '../css/VideoSelector.css'

const VideoSelector = ({ vids, click }) => {
  let vidNums = vids.map((video, index) => {
    return <button className="video-btn" title={`Trailer ${index + 1}`} key={index} onClick={() => click(index)}>{index + 1}</button>
  })

  return (
    <div className="video-selector">
      {vids.length === 0 && <h3 className="no-trailers">There are no trailers available for this movie</h3>}
      {vids.length > 1 && vidNums}
    </div>
  )
}

export default VideoSelector
