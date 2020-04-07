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
        <HeaderDashboard filterSelected={this.state.filterSelected} />

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
