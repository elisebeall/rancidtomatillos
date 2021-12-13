import '../css/Poster.css'
import { NavLink } from 'react-router-dom'

const Poster = (props) => {
  return (
    <NavLink to={`/movie/${props.id}`}>
      <img className="grid-posters" src={props.image} alt={props.title} />
    </NavLink>
  )

}

export default Poster
