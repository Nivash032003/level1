import React from "react";

const StyledComponent = ({ color, fontSize }) => {
  const dynamicStyle = {
    color:  "purple",
    border:"solid",
    backgroundColor: "antiquewhite",
    fontSize:  "20px",
    padding: "10px",
    border: "1px solid ",
    textAlign: "center",
  };

  return (
    <div className="App" style={dynamicStyle}>
      <h3>Dynamic Styling in React</h3>
      <p>The text color and font size are set using props!</p>
    </div>
  );
};

export default StyledComponent;
