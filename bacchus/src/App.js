import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import NewBottle from "./components/NewBottle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faCheck,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faTimes, faCheck, faChevronRight, faChevronLeft);

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo
    };
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="App">
        <Switch>
          {/* {!this.state.currentUser && (
            <Route exact path="/" component={HomePage} />
          )} */}
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/new-bottle" component={NewBottle} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return { user: authReducer };
};

export default withRouter(connect(mapStateToProps)(App));
