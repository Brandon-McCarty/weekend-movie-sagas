import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'

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