import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../_helpers/history";

import EmptyDashboard from "./EmptyDashboard.jsx";
import BottleCard from "./BottleCard.jsx";
import BottleDetails from "./BottleDetails.jsx";
import AddButton from "./AddButton.jsx";
import HeaderDashboard from "./HeaderDashboard.jsx";

import { bottleActions } from "../_actions";

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
      animateDetails: "slide-up",
      animateLayer: "layer-fade-in",
    };
    this.myRef = React.createRef();
    this.detailsRef = React.createRef();
    this.layerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({ bottles: this.props.bottles }, () => this.displayBottles());
    if (this.props.match) {
      let { id } = this.props.match.params;
      if (id) {
        bottleActions
          .getOneBottle(id)
          .then((res) => {
            this.setState({ bottleDetails: res });
          })
          .catch((err) => history.push("/"));
      }
    }
  }

  componentDidUpdate(prevProps) {
    const details = this.detailsRef.current;
    if (details && window.matchMedia("(max-width: 1023px)").matches) {
      details.addEventListener("mousemove", this.updatePosition, false);
      details.addEventListener("touchmove", this.updatePosition, false);
      details.addEventListener("mouseup", this.move, false);
      details.addEventListener("touchend", this.move, false);
    }
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

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    const details = this.detailsRef.current;
    if (details) {
      details.removeEventListener("mousedown", this.lock, false);
      details.removeEventListener("touchstart", this.lock, false);
      details.removeEventListener("mouseup", this.move, false);
      details.removeEventListener("touchend", this.move, false);
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
          (key) =>
            bottle[key] && bottle[key].toString().search(searchValue) !== -1
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

  handleClickOutside = (e) => {
    if (!this.myRef.current?.contains(e.target)) {
      const details = this.detailsRef.current;
      if (details) {
        this.hideDetails();
      }
    }
  };

  hideDetails = () => {
    this.setState({
      animateDetails: "hide-details",
      animateLayer: "layer-fade-out",
    });
    setTimeout(() => {
      this.setState(
        {
          bottleDetails: false,
          animateDetails: "slide-up",
          animateLayer: "layer-fade-in",
        },
        () => history.push("/")
      );
    }, 600);
  };

  upDetails = () => {
    const details = this.detailsRef.current;
    this.setState({ animateDetails: "up" }, () => {
      setTimeout(() => {
        details.style.top = "";
      }, 600);
    });
  };

  updatePosition = (e) => {
    this.setState({ animateDetails: "" });
    const details = this.detailsRef.current;
    let y;
    if (e.touches) {
      y = e.touches[0].pageY;
      details.style.top = y + "px";
    }
  };

  move = (e) => {
    const details = this.detailsRef.current;
    if (details.offsetTop > 250) {
      this.hideDetails();
    } else {
      this.upDetails();
    }
  };
  render() {
    let {
      bottleDetails,
      bottlesResults,
      filterSelected,
      animateDetails,
      animateLayer,
    } = this.state;
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
          {this.props.loading ? (
            <div>HELLO</div>
          ) : this.props.bottles.length === 0 ? (
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
            <div
              ref={this.layerRef}
              className={`position-fixed layer ${animateLayer}`}
            ></div>
            <div ref={this.myRef}>
              <BottleDetails
                bottle={bottleDetails}
                detailsRef={this.detailsRef}
                animateDetails={animateDetails}
              />
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
