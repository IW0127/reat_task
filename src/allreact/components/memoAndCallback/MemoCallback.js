import React, { useCallback, useState } from "react";
import UseMemoize from "./UseMemoize";

function MemoCallback() {
  const [name, setName] = useState(0);
  const [count, setCount] = useState(0);

  const newTodo = useCallback(() => {
    let newName = "and dk";
    return newName;
  }, [name]);

  return (
    <div className="text-center m-3">
      <h1>useCallback and useMemo Hooks</h1>
      <UseMemoize toDo={name} addTodo={newTodo} />
      <h3 className="m-3">Count value is {count}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
          setName("dk");
        }}
      >
        increment
      </button>
    </div>
  );
}

export default MemoCallback;
