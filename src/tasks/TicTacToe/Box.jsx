import React from "react";
import "./styles.css";

const Box = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <div>
      <span
        className={classes + (props.state === "X" ? `fc-red` : `fc-yellow`)}
        onClick={()=>props.onClick(props.index)}
      ></span>
    </div>
  );
};

export default Box;
