import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "", load: false
    };
  }
  render() {
    return (
      <div className="bg-primary background-home text-white">
          <div>HOMEPAGE</div>
          <div className="loader"></div>
      </div>
    );
  }
}

export default HomePage;
