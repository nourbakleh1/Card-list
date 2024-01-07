import React from 'react';
import "./Card.css";


 const Cardlist = ({id,name,Age,phone,Address,type,removeEL}) => {
  return (
    <div className="cardwraper" key={id} style={{ backgroundColor:type==="girl"?"#e3c8e1":"#9ccae1" }}>
            <p><span className='title-card'>Name: </span> {name}</p>
            <p><span className='title-card'>Phone: </span>{phone}</p>
            <p><span className='title-card'>Age: </span>{Age}</p>
            <p><span className='title-card'>Address: </span>{Address}</p>
            <button className="BTN" onClick={()=>{removeEL(id)}}>X</button>
            </div>
  )
}
export default Cardlist;