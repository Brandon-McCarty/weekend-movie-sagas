import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'



function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const getDetails = () => {
        // dispatch get route for details of selected movie
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        console.log('Get details for', movie.title);
        //send to details page to show details for selected movie
        history.push('/details');
    }

    return (
        <Grid item xs={12} s={6} md={3} lg={4}>
            <Paper
                style={{
                    borderColor: "#01B0D3",
                    border: "1px solid #01B0D3"
                }}
                onClick={getDetails}>
                <div key={movie.id} >
                    <h3>{movie.title}</h3>

                    <img src={movie.poster} alt={movie.title} />
                </div>
            </Paper>
        </Grid>
    )
}

export default MovieItem;