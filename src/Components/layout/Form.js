import React from 'react';
import Controller from "./Controller";
import Bottun from "./Bottun/Bottun";



const Form = (props) => {
  return (
    
    <div onSubmit={props.onSubmit}>{props.children}</div>
  )
}
 
Form.Controller=Controller;
Form.Bottun=Bottun;

export default Form;