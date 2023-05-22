/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

const Bio = (props) => 
  (
    <div>
      <h3>Bio</h3>
      {props.children}
    </div>
  );


export default Bio;

