import '../css/PosterGrid.css';
import Poster from './Poster'

const PosterGrid = ({ posters, posterClick }) => {
    const moviePosters = posters.map(poster => {
        return <Poster
            key={poster.id}
            id={poster.id}
            image={poster.poster_path} 
            onClick={posterClick}/>
    })

    return (
        <section>
            {moviePosters}
        </section>
    )
}

export default PosterGrid