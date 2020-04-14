import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { authActions } from "./_actions";
import { bottleActions } from "./_actions";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import NewBottle from "./components/AddBottle/NewBottle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faTimes,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus
);

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.props.dispatch({
        type: "LOGIN",
        userLogged: userInfo
      });
    }
    this.state = {
      currentUser: userInfo
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.email !== this.props.user.email) {
      bottleActions.addAllBottles(this.props.user);

      this.setState({ currentUser: this.props.user });
    }
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="App">
        <Switch>
          {!this.state.currentUser && (
            <Route exact path="/" component={HomePage} />
          )}
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/new-bottle" component={NewBottle} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default withRouter(connect(mapStateToProps)(App));
