import {useDispatch} from 'react-redux';

function MovieItem({movie}) {

    const dispatch = useDispatch();

    const getDetails = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie.id})
        console.log('Get details for', movie.title);
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img  onClick={getDetails} src={movie.poster} alt={movie.title} />
        </div>
    )
}

export default MovieItem;