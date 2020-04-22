import React, { Component } from "react";
import { connect } from "react-redux";

import EmptyDashboard from "./EmptyDashboard.jsx";
import BottleCard from "./BottleCard.jsx";
import BottleDetails from "./BottleDetails.jsx";
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
      bottlesResults: [],
      bottleDetails: false,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({ bottles: this.props.bottles }, () => this.displayBottles());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bottles.length !== this.props.bottles.length) {
      this.setState(
        {
          bottles: this.props.bottles,
          bottlesResults: this.props.bottles,
        },
        () => this.displayBottles()
      );
    }
  }

  search = (searchValue) => {
    this.setState({ searchValue: searchValue }, () => this.displayBottles());
  };

  selectFilter = (filter) => {
    this.setState({ filterSelected: filter }, () => this.displayBottles());
  };

  displayBottles = () => {
    let { bottles } = this.props;
    let { filterSelected, searchValue } = this.state;
    let results = [];
    if (searchValue !== "") {
      results = bottles.filter((bottle) =>
        Object.keys(bottle).some(
          (key) => bottle[key].toString().search(searchValue) !== -1
        )
      );
      if (filterSelected !== "all") {
        results = results.filter((bottle) => bottle.nb > 0);
      }
    } else if (filterSelected !== "all") {
      results = bottles.filter((bottle) => bottle.nb > 0);
    } else {
      results = bottles;
    }
    this.setState({ bottlesResults: results });
  };

  seeDetails = (bottle) => {
    this.setState({ bottleDetails: bottle });
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = (e) => {
    if (!this.myRef.current?.contains(e.target)) {
      this.setState({ bottleDetails: false });
    }
  };

  render() {
    let { bottleDetails, bottlesResults, filterSelected } = this.state;
    return (
      <div className="position-relative h-100">
        <HeaderDashboard
          filterSelected={filterSelected}
          search={this.search}
          selectFilter={this.selectFilter}
        />

        <div
          className="d-flex justify-content-center h-100"
          style={{ overflowY: `${bottleDetails ? "hidden" : "scroll"}` }}
        >
          {this.props.bottles.length === 0 ? (
            <EmptyDashboard />
          ) : (
            <div className="list-bottles d-flex flex-column w-100 px-4">
              {bottlesResults.map((bottle, index) => (
                <BottleCard
                  bottle={bottle}
                  key={bottle._id}
                  seeDetails={this.seeDetails}
                />
              ))}
            </div>
          )}
        </div>

        {bottleDetails ? (
          <div>
            <div className="position-fixed layer"></div>
            <div ref={this.myRef}>
              <BottleDetails bottle={bottleDetails} />
            </div>
          </div>
        ) : (
          <AddButton />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default connect(mapStateToProps)(Dashboard);
