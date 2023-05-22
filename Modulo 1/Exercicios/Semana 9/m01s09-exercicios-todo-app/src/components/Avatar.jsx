/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

const Avatar = (props) => 
   (
    <img
    src={props.src}
    className="img-thumbnail"
    alt={props.alt}
  />
  );

  export default Avatar
