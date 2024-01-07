import React, { useState } from 'react';
import Form from "../layout/Form";
// import Bottun from "./Bottun/Bottun";
import "../App.css"



const Adduser = ({HandelerDataCard}) => {
    const [input,setinput]=useState(
        {
            name:"",
            age:"",
            phone:"",
            address:"",
            type:""

        }
    );
    const inputHandeller=(e)=>{
        const key=e.target.id;
        const value=e.target.value;
        setinput({...input,[key]:value});

        


    }

    const submitHandeller=(e)=>{
        e.preventDefault();
        // console.log(input.name,input.age,input.address,input.phone);
        let x=Date.now();
        HandelerDataCard({
            id:x,
            name:input.name,
            Age:input.age,
            phone:input.phone,
            Address:input.address,
            type:input.type,
                        });
                        input.name="";
                        input.address="";
                        input.age="";
                        input.phone="";


                        


      }
  return (
    <form onSubmit={submitHandeller}>
        <Form.Controller>
        <label htmlFor="name">NAME :</label>
        <input type="text" id="name" placeholder='enter your name' value={input.name} onChange={inputHandeller}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor="age">AGE :</label>
        <input type="number" id='age' placeholder='enter your age'value={input.age} onChange={inputHandeller}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor="phone">PHONE :</label>
        <input type="text" id="phone" placeholder='enter your phone'value={input.phone} onChange={inputHandeller}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor="address">ADDRESS:</label>
        <input type="text" id='address' placeholder='enter your address'value={input.address} onChange={inputHandeller}/>
        </Form.Controller>
        <Form.Controller>
        <label htmlFor="type">Choose your gender :</label>
        <select className='create' id="type" value={input.type} onChange={inputHandeller}>
        <option value="boy">
        boy
        </option>
        <option value="girl">
        girl
        </option>
        </select>
        </Form.Controller>
        
        <Form.Bottun className="save" type="submit">Create</Form.Bottun>

        </form>
  )
}

export default Adduser;