import React, { useState } from "react";
import Styles from "./Fillter.module.css";

const Fillter=({copy})=>{
    const [fillter,setFillter]=useState("");
    const filltertion=(e)=>{
       const name= e.target.value;
       setFillter(name);
       copy(name);
    }
    return (<div>
        <input type="search" placeholder="search ..." className={Styles.t1} onChange={filltertion}   value={fillter}/>
        
        </div>)
}
export default Fillter;