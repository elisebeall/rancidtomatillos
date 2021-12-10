import '../css/VideoSelector.css'

const VideoSelector = ({ vids, onClick }) => {
  let vidNums = vids.map((video, index) => {
    return <h3 key={index} onClick={onClick(index)}>{index + 1}</h3>
  })

  return (
    <div className="numVids">
      {vids.length === 0 && <h3>There are no trailers available for this movie</h3>}
      {vids.length > 1 && vidNums}
    </div>
  )
}

export default VideoSelector
