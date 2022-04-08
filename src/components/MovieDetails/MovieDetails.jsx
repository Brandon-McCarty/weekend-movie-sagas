import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box, Container, Card } from '@material-ui/core'


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
                        <h4>Genre(s)</h4>
                        <div>
                            {/* Show each genre associated with the selected movie */}
                            {genres.map((genre, i) => {
                                return (<p key={i}>{genre.name}</p>)
                            })}
                        </div>
                        <Box pb={4}>
                            <Button
                                onClick={sendHome}
                                style={{
                                    borderRadius: 25,
                                    backgroundColor: "#01B0D3",
                                    padding: "9px 18px",
                                    fontSize: "14px",
                                    mb: "50px"
                                }}
                                variant="contained"
                            >Back</Button>
                        </Box>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default MovieDetails;