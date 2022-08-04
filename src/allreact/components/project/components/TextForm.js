import React, { Component } from "react";
import copy from "copy-to-clipboard";
export default class TextForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleLoClick = this.handleLoClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleCopyClick = this.handleCopyClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.state = { text: "" };
    // this.count = 0;
    this.countWord = [];
  }

  handleUpClick() {
    let newText = this.state.text.toUpperCase();
    this.setState({ text: newText });
  }
  handleLoClick() {
    let newText = this.state.text.toLowerCase();
    this.setState({ text: newText });
  }
  handleRemoveClick() {
    let newText = this.state.text.replace(/\s+/g, " ").trim();
    this.setState({ text: newText });
  }
  handleClearClick() {
    this.setState({ text: "" });
    this.count = 0;
  }
  handleCopyClick() {
    const text = document.getElementById("myBox");
    text.select();
    copy(this.state.text);
  }
  handleOnchange(event) {
    console.log(event);
    this.setState({ text: event.target.value });
    this.countWord = event.target.value.split(" ");
    this.count = 0;
    for (let i of this.countWord) {
      if (i !== "") {
        this.count++;
      }
    }
  }

  render() {
    return (
      <>
        <div className="container mb-3">
          <h4 htmlFor="myBox" className="form-label">
            {this.props.heading}
          </h4>
          <textarea
            className="form-control"
            value={this.state.text}
            onChange={this.handleOnchange}
            placeholder="Enter Your Text....."
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-3" onClick={this.handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={this.handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={this.handleRemoveClick}
          >
            Remove extra space
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={this.handleCopyClick}
          >
            Copy text
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={this.handleClearClick}
          >
            Clear text
          </button>
        </div>
        <div className="container my-2">
          <h4>Your text summary</h4>
          <p>
            {this.count ? this.count : 0} words and{" "}
            {this.state.text ? this.state.text.length : 0} characters
          </p>
          <h4>Preview</h4>
          <p>{this.state.text}</p>
        </div>
      </>
    );
  }
}
