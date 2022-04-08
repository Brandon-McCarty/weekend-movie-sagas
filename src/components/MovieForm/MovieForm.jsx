import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core'

function MovieForm({ setTrigger }) {

    // Gather user input for new movie to add
    const [newTitle, setNewTitle] = useState('')
    const [newPoster, setNewPoster] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newGenre, setNewGenre] = useState('')

    const dispatch = useDispatch();


    // dispatch to post movie to database
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
                <Select
                    name="genre"
                    labelId='genre-select-label'
                    id="genre-select"
                    onChange={(event) => setNewGenre(event.target.value)}
                    displayEmpty
                    defaultValue={''}
                    value={newGenre}
                >
                    <MenuItem
                        disabled
                        value=''
                    >--Choose a genre--
                    </MenuItem>
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space-Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
                </Select>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;