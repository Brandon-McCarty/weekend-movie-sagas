import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function MovieDetails () {

    const genres = useSelector(store => store.genres)
    const details = useSelector(store => store.details)
    const history = useHistory();

    const sendHome = () => {
        history.push('/');
    }

    return (
        <>
        <div>
            <p>{details.title}</p>
            <img src={details.poster}/>
            <p>{details.description}</p>
            <h3>Genre(s)</h3>
        <ul>
        {genres.map((genre, i )=> {
            return (<li key={i}>{genre.name}</li>)
        })}
        </ul>
        <button onClick={sendHome}>Back</button>
        </div>
        </>
    )
}

export default MovieDetails;