import '../css/Loading.css'
import loadingIcon from '../assets/load.gif'

const Loading = () => {
  return (
    <div className="loading-area">
      <img className="loading-icon" src={loadingIcon} alt="loading" />
    </div>
  )
}

export default Loading
