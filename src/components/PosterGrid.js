import '../css/PosterGrid.css';
import Poster from './Poster'

const PosterGrid = ({ posters }) => {
    const moviePosters = posters.map(poster => {
        return <Poster image={poster.poster_path}/>
    })

    return (
        <section>
            {moviePosters}
        </section>
    )
}

export default PosterGrid