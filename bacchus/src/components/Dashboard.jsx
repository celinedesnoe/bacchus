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
      searchValue: "",
      bottles: [],
      bottlesResults: []
    };
  }

  componentDidMount() {
    this.setState({ bottles: this.props.bottles });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bottles.length !== this.props.bottles.length) {
      this.setState({
        bottles: this.props.bottles,
        bottlesResults: this.props.bottles
      });
    }
  }

  search = searchValue => {
    this.setState({ searchValue: searchValue }, () => this.displayBottles());
  };

  selectFilter = filter => {
    this.setState({ filterSelected: filter }, () => this.displayBottles());
  };

  displayBottles = () => {
    let { bottles } = this.props;
    let { filterSelected, searchValue } = this.state;
    let results = [];
    if (searchValue !== "") {
      results = bottles.filter(bottle =>
        Object.keys(bottle).some(
          key => bottle[key].toString().search(searchValue) !== -1
        )
      );
      if (filterSelected !== "all") {
        results = results.filter(bottle => bottle.nb > 0);
      }
    } else if (filterSelected !== "all") {
      results = bottles.filter(bottle => bottle.nb > 0);
    } else {
      results = bottles;
    }
    this.setState({ bottlesResults: results });
  };

  render() {
    return (
      <div className="">
        <HeaderDashboard
          filterSelected={this.state.filterSelected}
          search={this.search}
          selectFilter={this.selectFilter}
        />

        <div className="d-flex justify-content-center">
          {this.props.bottles.length === 0 ? (
            <EmptyDashboard />
          ) : (
            <div className="list-bottles d-flex flex-column w-100 px-4">
              {this.state.bottlesResults.map((bottle, index) => (
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
