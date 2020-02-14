import React, { Component } from "react";
import Input from "./Input.jsx";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="">
        <div className="header-dashboard bg-grey">
          <div className="d-flex justify-content-around py-3 px-2">
            <div className="">
              <h3 className="">Welcome Céline,</h3>
              <h4>You have <span className="nb-bottles">54</span> bottles in stock</h4>
            </div>
            <div className={`profile-image`} style={{backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
