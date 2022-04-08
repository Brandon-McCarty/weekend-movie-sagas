import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-button">Close</button>
        </div>
    </div>
  ) : "";
}

export default Popup;