import React, { Component } from "react";

const Todoitems = props => (
  <div>
    {props.individualitems}
    <button onClick={() => props.handleRemoveOneItem(props.individualitems)}>
      Remove
    </button>
    
  </div>

);

export default Todoitems;
