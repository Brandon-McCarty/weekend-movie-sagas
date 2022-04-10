import './Popup.css'
import MovieForm from '../MovieForm/MovieForm';
// Material UI
import {Button} from '@material-ui/core';

function Popup({ trigger, setTrigger }) {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="contained"
          className="close-button"
          onClick={() => setTrigger(false)}
          style={{
            borderRadius: 10,
            backgroundColor: "#FF6961",
            padding: "9px 18px",
            fontSize: "14px",
            fontColor: "white"
        }}
        >Close</Button>
        <MovieForm
          setTrigger={setTrigger}
        />
      </div>
    </div>
  ) : '';
}

export default Popup;