import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  useImperativeHandle(ref, () => ({ increment }));
  return (
    <div>
      <h3 className="m-2">count : {count}</h3>
      <button className="btn btn-success" onClick={increment}>
        Child Button
      </button>
    </div>
  );
});

export default Child;
