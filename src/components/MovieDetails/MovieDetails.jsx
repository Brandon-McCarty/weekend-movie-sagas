import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails() {

    // acquire the genres for the selected movie
    const genres = useSelector(store => store.genres)
    // acquire the movie details
    const details = useSelector(store => store.details)
    const history = useHistory();

    const sendHome = () => {
        // return to home
        history.push('/');
    }

    return (
        <>
            <div>
                <p>{details.title}</p>
                <img src={details.poster} />
                <p>{details.description}</p>
                <h3>Genre(s)</h3>
                <div>
                    {/* Show each genre associated with the selected movie */}
                    {genres.map((genre, i) => {
                        return (<p key={i}>{genre.name}</p>)
                    })}
                </div>
                <button onClick={sendHome}>Back</button>
            </div>
        </>
    )
}

export default MovieDetails;