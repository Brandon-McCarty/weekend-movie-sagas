import './Popup.css'
import MovieForm from '../MovieForm/MovieForm';

function Popup({trigger, setTrigger}) {
  return (trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button 
            className="close-button"
            onClick={() => setTrigger(false)}
            >Close</button>
            <MovieForm />
        </div>
    </div>
  ) : "";
}

export default Popup;