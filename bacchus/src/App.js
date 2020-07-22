import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bottleActions } from "./_actions";

import { Switch, Route } from "react-router-dom";
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
  faMinus,
  faCamera,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faTimes,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus,
  faCamera,
  faBars
);

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.props.dispatch({
        type: "LOGIN",
        userLogged: userInfo,
      });
    }
    this.state = {
      currentUser: userInfo,
      loading: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.email !== this.props.user.email) {
      this.setState({ loading: true });
      bottleActions
        .addAllBottles(this.props.user)
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(() => console.log("ERROR"));

      this.setState({ currentUser: this.props.user });
    }
  }

  render() {
    console.log("this.state.loading", this.state.loading);
    return (
      <div className="App">
        <Switch>
          {!this.state.currentUser && (
            <Route exact path="/" component={HomePage} />
          )}
          <Route
            exact
            path="/"
            render={(props) => (
              <Dashboard {...props} loading={this.state.loading} />
            )}
          />

          <Route exact path="/new-bottle" component={NewBottle} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default withRouter(connect(mapStateToProps)(App));
