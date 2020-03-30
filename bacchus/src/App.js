import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

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
    console.log("this.props", this.props.user, this.props.user?.email);
    return (
      <div className="App">
        <Switch>
          {this.state.currentUser ? (
            <Route to="/" component={Dashboard} />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return { user: authReducer };
};

export default connect(mapStateToProps)(App);
