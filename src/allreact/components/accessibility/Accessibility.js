import React from "react";

class CreateInput extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }
  getValue() {
    console.log("Using ref", this.text.current.value);
  }
  render() {
    return (
      <div>
        <br />
        <p>show output console</p>
        <label>enter text : </label>
        <input type="text" onChange={this.getValue} ref={this.text} />
      </div>
    );
  }
}

export default function Accessibility() {
  return (
    <>
      <a
        href="https://reactjs.org/docs/accessibility.html"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Accessibility
      </a>
      <CreateInput />
    </>
  );
}
