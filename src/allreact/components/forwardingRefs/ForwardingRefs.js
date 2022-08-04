import React from "react";

function handelClick() {
  console.log("yes");
}
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={handelClick}>
    {props.children}
  </button>
));

export default function ForwardingRefs() {
  const ref = React.createRef();
  return (
    <>
      <h3>Show output on console</h3>
      <FancyButton ref={ref}>Click me!</FancyButton>
    </>
  );
}
