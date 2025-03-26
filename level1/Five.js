import React from "react";

const CalculationComponent = () => {
  const num1 = 18;
  const num2 = 26;

  return (
    <div className="App">
      <h3>Calculation </h3>
      <p>The sum of {num1} and {num2} is: {num1 + num2}</p>
    </div>
  );
};

export default CalculationComponent;
