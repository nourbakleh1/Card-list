
import React from 'react';

const Bottun = (props) => {
  return (
    <button type={`${props.type}`} style={props.style} className={props.className} onClick={props.onClick}>{props.children}</button>
  )
}

export default Bottun;