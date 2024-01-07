import React from "react";
import Cardlist from "./Cardlist";


const Card=({All,removeEL})=>{
    const Cards=All.map(({id,...All})=>
      <Cardlist {...All} removeEL={removeEL} key={id} id={id}/>
    
      
    );
   return(
    <div>{Cards}</div>
   )
}
export default Card;