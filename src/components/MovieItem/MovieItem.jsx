import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const getDetails = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        console.log('Get details for', movie.title);
        history.push('/details');
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img  onClick={getDetails} src={movie.poster} alt={movie.title} />
        </div>
    )
}

export default MovieItem;