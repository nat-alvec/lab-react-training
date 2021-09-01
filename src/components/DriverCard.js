import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <img src={props.img} alt="Travis Kalanick' photo" />
      <h2>{props.name}</h2>
      <Rating>{props.rating}</Rating>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
