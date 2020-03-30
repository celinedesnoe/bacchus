import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false
    };
  }

  render() {
    console.log("this.props", this.props.user, this.props.user?.email);
    return (
      <div className="App">
        <Switch>
          {this.props.user?.email ? (
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>HELLO WELCOME</div>
                  // <Dashboard
                  //   // toLogout={() => this.logoutClick()}
                  //   // currentUser={this.state.currentUser}
                  //   // rerouteUrl="/"
                  //   // onFollowCurrentUser={user => this.updateUser(user)}
                  // />
                );
              }}
            />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
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
