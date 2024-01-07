import React from 'react';
import csd from "./Form.module.css";



const Controller = (props) => {
  return (
    <div className={csd.control}>{props.children}</div>
  )
}

export default Controller