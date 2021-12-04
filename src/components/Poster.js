import '../css/Poster.css';

const Poster = (props) => {
    return <img src={props.image} alt='movie poster' onClick={() => props.onClick(props.id)}/>
}

export default Poster