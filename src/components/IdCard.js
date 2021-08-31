import './IdCard.css';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img className="IdCard-img" src={props.picture} alt={props.picture} />
      <div className="IdCard-text">
        <h3>
          First Name: <span>{props.firstName}</span>
        </h3>
        <h3>
          Last Name: <span>{props.lastName}</span>
        </h3>
        <h3>
          Gender: <span>{props.gender}</span>
        </h3>
        <h3>
          Height: <span>{props.height}</span>
        </h3>
        <h3>
          Birth: <span>{props.birth.toDateString()}</span>
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
