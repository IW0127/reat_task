import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
      throw new Error("Crashed!!!!");
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <h1>
          Caught an error.{this.state.error && this.state.error.toString()}
        </h1>
      );
    }
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default function TryCatch() {
  return (
    <>
      <MyComponent />
    </>
  );
}
