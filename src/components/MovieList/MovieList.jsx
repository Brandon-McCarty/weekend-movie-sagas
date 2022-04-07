import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

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
        </main>

    );
}

export default MovieList;