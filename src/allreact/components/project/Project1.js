import React, { Component } from "react";
import TextForm from "./components/TextForm";
class Project1 extends Component {
  constructor(props) {
    super(props);
    this.nav = { title: "TextUtils" };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h3>
            -: This Project using state ,props and Handling Events example using
            class base components :-
          </h3>
          <TextForm heading="Enter the text to analyze below" />
        </div>
      </div>
    );
  }
}

export default Project1;
