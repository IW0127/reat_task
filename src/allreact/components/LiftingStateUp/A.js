import React, { Component } from "react";
import B from "./B";
import C from "./C";

class A extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = { text: "" };
  }

  handleTextChange(newText) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <React.Fragment>
        <B text={this.state.text} handleTextChange={this.handleTextChange} />
        <C text={this.state.text} />
      </React.Fragment>
    );
  }
}

export default A;
