import '../css/MovieData.css'
const MovieData = ( { label, value } ) => {
    let num = value/1000000 < 1 ? `${value.toFixed(1)}/10` : `${(value/1000000).toFixed(0)} mil`
    let amount = !value ? 'N/A' : num

    return (
        <div className='movie-data'>
            <h3>{label}</h3>
            <h3>{amount}</h3>
        </div>
    )
}

export default MovieData
