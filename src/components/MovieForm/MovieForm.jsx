import { useState } from 'react';
import { useDispatch } from 'react-redux';

function MovieForm({setTrigger}) {

    const [newTitle, setNewTitle] = useState('')
    const [newPoster, setNewPoster] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newGenre, setNewGenre] = useState('')

    const dispatch = useDispatch();

    const addNewMovie = (event) => {
        event.preventDefault();
        console.log('NEW MOVIE ADDED')
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: newTitle,
                poster: newPoster,
                description: newDescription,
                genre_id: newGenre
            }
        })
        setTrigger(false);
    }


    return (
        <div>
            <h3>Add Movie Details</h3>
            <form onSubmit={addNewMovie}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Poster Link"
                    value={newPoster}
                    onChange={(event) => setNewPoster(event.target.value)}
                />
                <br />
                <textarea
                    rows="5"
                    cols="35"
                    type="text"
                    placeholder="Movie Description"
                    name="Movie Description"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                />
                <br />
                <select
                    name="genre"
                    id="genre-select"
                    onChange={(event) => setNewGenre(event.target.value)}
                    defaultValue={''}
                >
                    <option  disabled value="">--Choose a genre--</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;