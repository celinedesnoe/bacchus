import React, { Component } from "react";
import { connect } from "react-redux";

import EmptyDashboard from "./EmptyDashboard.jsx";
import BottleCard from "./BottleCard.jsx";
import AddButton from "./AddButton.jsx";
import HeaderDashboard from "./HeaderDashboard.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      filterSelected: "all",
      bottles: []
    };
  }

  componentDidMount() {
    this.setState({ bottles: this.props.bottles });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bottles.length !== this.props.bottles.length) {
      this.setState({ bottles: this.props.bottles });
    }
  }

  search = text => {
    const results = this.state.bottles.filter(
      bottle =>
        bottle.name?.includes(text) ||
        bottle.appellation?.includes(text) ||
        bottle.cépage?.includes(text)
    );
    this.setState({ bottles: results });
  };

  render() {
    return (
      <div className="">
        <HeaderDashboard
          filterSelected={this.state.filterSelected}
          search={this.search}
        />

        <div className="d-flex justify-content-center">
          {this.props.bottles.length === 0 ? (
            <EmptyDashboard />
          ) : (
            <div className="list-bottles d-flex flex-column w-100 px-4">
              {this.state.bottles.map((bottle, index) => (
                <BottleCard bottle={bottle} key={bottle._id} />
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
