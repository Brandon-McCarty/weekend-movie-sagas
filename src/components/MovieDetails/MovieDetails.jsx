import {useSelector} from 'react-redux';

function MovieDetails () {

    const genres = useSelector(store => store.genres)

    return (
        <ul>
        {genres.map(genre => {
            return (<li>{genre.name}</li>)
        })}
        </ul>
    )
}

export default MovieDetails;