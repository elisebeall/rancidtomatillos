import '../css/Poster.css'
import { NavLink } from 'react-router-dom';

const Poster = (props) => {
  return (
    <NavLink to={`/movie/${props.id}`}>
      <img src={props.image} alt={props.title} />
    </NavLink>
  )
  
}

export default Poster
