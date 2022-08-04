import React from "react";

function ChildComponents(props) {
  return (
    <ul>
      <h3> =&gt;this example composition</h3>
      <li>{props.color}</li>
      {props.children}
    </ul>
  );
}

export default function Composition() {
  return (
    <ChildComponents color="red">
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ChildComponents>
  );
}
