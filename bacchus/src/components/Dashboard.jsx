import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "./Search.jsx";
import Button from "./Button.jsx";
import EmptyDashboard from "./EmptyDashboard.jsx";
import BottleCard from "./BottleCard.jsx";
import AddButton from "./AddButton.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      filterSelected: "all"
    };
  }

  render() {
    return (
      <div className="">
        <div className="header-dashboard px-3 py-2">
          <div className="d-flex justify-content-between mt-3">
            <div className="">
              <h3 className="">Welcome Céline,</h3>
              <h5>
                You have
                <span className="text-secondary nb-bottles">
                  {` ${this.props.bottles.length} `}
                </span>
                bottles in stock
              </h5>
            </div>
            <div
              className={`profile-image mr-3`}
              style={{
                backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`
              }}
            />
          </div>
          <Search placeholder="Name, Region, Appellation..." className="" />
          <div className="d-flex my-3">
            <Button
              text="All"
              className="mr-2"
              selected={this.state.filterSelected === "all"}
              filter={true}
            />
            <Button
              text="In stock"
              className=""
              selected={this.state.filterSelected === "instock"}
              filter={true}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {this.props.bottles.length === 0 ? (
            <EmptyDashboard />
          ) : (
            <div className="list-bottles d-flex flex-column w-100 px-4">
              {this.props.bottles.map((bottle, index) => (
                <BottleCard bottle={bottle} />
              ))}
            </div>
          )}
        </div>
        <AddButton />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default connect(mapStateToProps)(Dashboard);
