import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import Popup from '../Popup/Popup';
import { Container, Button, Grid, Box } from '@material-ui/core'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        // dispatch to get all movies to display on the DOM
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <Box pb={4}>
                <Button
                    style={{
                        borderRadius: 25,
                        backgroundColor: "#01B0D3",
                        padding: "9px 18px",
                        fontSize: "14px",
                    }}
                    variant="contained"
                >Add Movie</Button>
            </Box>
            <Popup trigger={true} />
            <Container>
                <Grid container>
                    <section className="movies">
                        {movies.map(movie => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                />
                            );
                        })}
                    </section>
                </Grid>
            </Container>
        </main>

    );
}

export default MovieList;