
function CreditCard(props) {
    return(
        <div className="card">
           <img src={props.type === "Visa" ? '../img/visa.png' : '../img/master-card.svg'}/>
           <p><span>**** **** ****</span>{props.number.split("").slice(12).join("")}</p>
           <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p>
           <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;

