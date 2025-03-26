import React from "react";

const StringList = () => {
  const items = ["Apple", "Banana", "Cherry","WaterMelon"];

  return (
    <div className="App" >
      <h3>List of Fruits</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default StringList;
