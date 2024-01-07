import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import Modal from "./modal/Modal";
import Fillter from './Filter/Fillter';
import Form from './layout/Form';
import Adduser from "./Adduser/Adduser";



const App=()=>{
    const [modal,setmodal]=useState(false);
    const [fill,setFill] = useState("");
    const [opacity,setOpacity] = useState(true); 
    const [boys,setBoys]=useState(
        [

        {id:1, name:"Nour aldeen",Age:25,phone:"0996586585",Address:"kafarsussa" , type:"boy"}
        ,
        {id:2, name:"mena",Age:65,phone:"0996548585",Address:"mezza" , type:"girl"}
        ,
        {id:3, name:"samer",Age:27,phone:"0996586585",Address:"dskjh 5" , type:"boy"}
        ,
        {id:4, name:"sara",Age:19,phone:"03695656585",Address:"115 str" , type:"girl"}
               ]
               );
    
const deleteEL=(id)=>{
    const remove=boys.filter((el)=>{
       return (el.id !== id)
    });
    setBoys(remove);
}
    
const paste=(name)=>{
    setFill(name);
    

}
   const  fillterhand=()=>{
    if(fill.length!==0){
        return boys.filter((el)=>
           el.name.includes(fill)
        );
           
           }
           else{
               return boys;
           }
   }          
   const toggle=()=>{
    setmodal(!modal);
   }
   const HandelerDataCard=(data)=>{
        setBoys((preve)=>{
            return ([...preve,{...data}]);
        });
        toggle();

   }
              
    return(
        <>
        <div className="mainContainer " >
        
        
        <h1 className="title">Card List</h1>
        <Form.Bottun className="create" onClick={()=>{setmodal(!modal)}}>Create card</Form.Bottun>
    
        <Form.Bottun className="test" onClick={()=>{setOpacity(!opacity)}} >{opacity ? "hide" : "show"}</Form.Bottun>

        <div className={opacity ===true ?"show":"hide"}>
        <Fillter copy={paste}/>

        <Card All={fillterhand()} removeEL={deleteEL} />
        
        </div>
        </div>
        <Modal modal={modal} closeop={toggle}><Adduser HandelerDataCard={HandelerDataCard}/></Modal></>
    )  
}
export default App;