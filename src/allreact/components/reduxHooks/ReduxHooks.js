import { useSelector, useDispatch } from "react-redux";
import React from "react";

function ReduxHooks() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const AddValue = () => {
    dispatch({ type: "ADD_BY_10", payload: 10 });
  };

  return (
    <div className="text-center">
      <h1>Counter App</h1>
      <h4> {counter} </h4>
      <button className="btn btn-success m-2" onClick={Increment}>
        Increment
      </button>
      <button className="btn btn-success m-2" onClick={Decrement}>
        Decrement
      </button>
      <button className="btn btn-success m-2" onClick={AddValue}>
        Add by 10
      </button>
    </div>
  );
}

export default ReduxHooks;
