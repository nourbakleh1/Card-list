import React from 'react';
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./Components/App";



let root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <App/>
  </React.Fragment>
)
