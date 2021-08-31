import "./Random.css"

function Random(props) {
  const min = Math.ceil(props.min);
  const max = Math.floor(props.max);
  const random = Math.floor(Math.random() * (max - min) + min);
  return (
    <h4 className="idRandom">
      Random value between {min} and {max} &gt; {random}
    </h4>
  );
}

export default Random;
