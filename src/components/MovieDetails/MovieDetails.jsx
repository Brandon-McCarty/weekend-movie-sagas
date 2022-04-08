import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core'
import {Button} from '@material-ui/core'


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
        <Container>
        <Card 
        style={{
            borderColor: "#01B0D3",
            border: "4px solid #01B0D3"
        }}
        variant="outlined">
            <div>
                <h3>{details.title}</h3>
                <img src={details.poster} />
                <p>{details.description}</p>
                <h3>Genre(s)</h3>
                <div>
                    {/* Show each genre associated with the selected movie */}
                    {genres.map((genre, i) => {
                        return (<p key={i}>{genre.name}</p>)
                    })}
                </div>
                <Button 
                    onClick={sendHome}
                    style={{
                        borderRadius: 25,
                        backgroundColor: "#01B0D3",
                        padding: "9px 18px",
                        fontSize: "14px"
                    }}
                    variant="contained"
                >Back</Button>
            </div>
            </Card>
            </Container>
        </>
    )
}

export default MovieDetails;