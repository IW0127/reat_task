import React, { memo } from "react";

function UseMemoize({ toDo, addTodo }) {
  console.log("use memo");

  return (
    <div>
      To Do List {toDo} {addTodo()}.{" "}
    </div>
  );
}

export default memo(UseMemoize);
