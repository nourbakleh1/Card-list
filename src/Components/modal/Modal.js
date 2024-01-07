import React from 'react';
import csd from "./Modal.module.css";
import ReactDom from "react-dom";



 const Modal = ({modal,closeop,children}) => {
  return (
    ReactDom.createPortal(<React.Fragment>

        <div className={`${csd.backdrop}  ${modal?csd.show:null}`} onClick={closeop}></div>

        <div className={`${csd.overlay} ${modal?csd.show:""}`}>
        {children}
        </div>
        
    
    </React.Fragment>,document.getElementById("modal"))
    
  )
}
export default Modal;