import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const getDetails = () => {
        // dispatch get route for details of selected movie
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        console.log('Get details for', movie.title);
        //send to details page to show details for selected movie
        history.push('/details');
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={getDetails} src={movie.poster} alt={movie.title} />
        </div>
    )
}

export default MovieItem;