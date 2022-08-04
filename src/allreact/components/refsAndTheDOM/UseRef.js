import React, { useRef, useState } from "react";

function UseRefFunction() {
  const [text, setText] = useState(null);
  const inputText = useRef(null);
  const inputChange = () => {
    setText(inputText.current.value);
  };
  return (
    <>
      <input type="text" name="name" onChange={inputChange} ref={inputText} />
      <div>Output : {text}</div>
    </>
  );
}

export default UseRefFunction;
