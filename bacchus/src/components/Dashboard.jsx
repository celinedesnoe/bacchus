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
          <div className="d-flex justify-content-around">
            <div className="">
              <div>Welcome Céline,</div>
              <div>You have <span>54</span>bottles in stock</div>
            </div>
            <div className={`profile-image`} style={{backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
