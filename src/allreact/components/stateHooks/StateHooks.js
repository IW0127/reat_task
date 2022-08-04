import React, { useState } from "react";

function StateHooks() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const handOnAdd = () => {
    setAdd(add + 1);
    setAdd(add + 1);
    setCount(count + 1);
    setAdd(add + 1);

    console.log("using callback", add, count);
  };

  console.log("using count", count);
  return (
    <>
      <h4>increment number {add}</h4>
      <button onClick={handOnAdd}>Add</button>
    </>
  );
}

export default StateHooks;
