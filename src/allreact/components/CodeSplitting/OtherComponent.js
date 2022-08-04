import React from "react";

const OtherComponent = () => {
  function MathRandom() {
    return Math.floor(Math.random() * 100);
  }
  return (
    <div>
      <h1>
        This is Math random function using <MathRandom />
      </h1>
    </div>
  );
};
export default OtherComponent;
