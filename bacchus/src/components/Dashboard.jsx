import React, { Component } from "react";
import Search from "./Search.jsx";

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
        <div className="header-dashboard">
          <div className="d-flex justify-content-around py-3 px-2">
            <div className="">
              <h3 className="">Welcome Céline,</h3>
              <h5>
                You have <span className="text-secondary nb-bottles">54</span>{" "}
                bottles in stock
              </h5>
            </div>
            <div
              className={`profile-image`}
              style={{
                backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`
              }}
            />
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default HomePage;
