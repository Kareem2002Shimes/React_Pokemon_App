import React  from 'react';
import ReactDOM from 'react-dom';


function ModelRoot() {
  return (  ReactDOM.createPortal(
    <h1>Hello From ModelRoot</h1> , document.getElementById("model-root")
))
}

export default ModelRoot;