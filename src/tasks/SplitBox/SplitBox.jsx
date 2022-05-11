import React, { useState } from "react";
import "./SplitBox.css";

const SplitBox = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div className="SplitBox">
      <h1>Split Box</h1>
      <div className="box-board" onClick={handleClick}>
        {isClick ? <CreateBox /> : ""}
      </div>
    </div>
  );
};

const CreateBox = () => {
  const [box, setBox] = useState([true, true, true, true]);
  return (
    <div className="Create-Box">
      {box.map((val, index) => (
        <Box val={val} index={index} key={index} />
      ))}
    </div>
  );
};

const Box = ({ index }) => {
  const style = {
    0: {
      borderRight: "1px solid black",
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",

      margin: "0px",
      padding: "0px",
    },
    1: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      padding: "0px",
    },
    2: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      borderTop: "1px solid black",
      borderRight: "1px solid black",
      margin: "0px",
      padding: "0px",
    },
    3: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      borderTop: "1px solid black",
      margin: "0px",
      padding: "0px",
    },
  };
  console.log(index);
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div style={style[index]} onClick={handleClick}>
      {isClick ? <CreateBox /> : ""}
    </div>
  );
};

export default SplitBox;

