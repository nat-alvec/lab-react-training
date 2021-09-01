
function Rating(props) {
    const stars = [1, 2, 3, 4, 5];
   
    return(
       <div>
           {stars.map((element) => {
               if (element <= Math.round(props.children)){
                   return <i className="fas fa-star fa-2x"></i>
               } else {
                   return <i className="far fa-star fa-2x"></i>
               }
           })}
       </div>
    )
   }
   
   export default Rating;
