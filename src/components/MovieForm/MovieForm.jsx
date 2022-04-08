import {useState} from 'react';

function MovieForm() {

    const [newTitle, setNewTitle] = useState('')
    const [newPoster, setNewPoster] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const addNewMovie = (event) => {
        event.preventDefault();
        console.log('NEW MOVIE ADDED')
    }


    return (
        <div>
            <form onSubmit={addNewMovie}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Movie Poster"
                    value={newPoster}
                    onChange={(event) => setNewPoster(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Movie Description"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;