import '../css/PosterGrid.css'
import Poster from './Poster'
import Nav from './Nav'

const PosterGrid = ({ posters, posterClick }) => {
  const moviePosters = posters.map(poster => {
    return <Poster
      key={poster.id}
      id={poster.id}
      image={poster.poster_path}
      onClick={posterClick}/>
  })

  return (
    <div>
      <Nav />
      <section>
        {moviePosters}
      </section>
    </div>
  )
}

export default PosterGrid
