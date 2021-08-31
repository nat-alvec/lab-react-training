import "./Greetings.css"

function Greetings(props) {
    function greeting() {
        if (props.lang === 'de') {
            return <p>Hallo</p>
          } else if (props.lang === 'en') {
            return <p>Hello</p>
          } else if (props.lang === 'es') {
            return <p>Hola</p>
          } else if (props.lang === 'fr') {
            return <p>Bonjour</p>
          }
    }
  
  return <div className="idGreetings"> {greeting()} {props.children} </div>
}

export default Greetings;
