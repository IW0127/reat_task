import React, { useRef } from "react";
import Child from "./Child";

function Parent() {
  const ref = useRef();
  return (
    <div className="text-center m-3">
      <h1>useImperativeHandle</h1>
      <Child ref={ref} />
      <button
        className="btn btn-success m-3"
        onClick={() => ref.current.increment()}
      >
        Parent Button
      </button>
    </div>
  );
}

export default Parent;
