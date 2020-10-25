import React, { Component } from "react";
import "./Memory.css";

class Memory extends Component {
  render() {
    return (
      <div className="memoryBtn" onClick={() => this.props.handleClick()}>
        {this.props.children}
      </div>
    );
  }
}

export default Memory;
