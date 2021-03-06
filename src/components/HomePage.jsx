import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../_actions";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";

import { postCellar } from "../_services/api";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      login: true,
      signup: false,
    };
  }

  signUp(event, name, email, password) {
    event.preventDefault();
    let user = {
      email: email,
      originalPassword: password,
      name: name,
    };
    authActions.userSignUp(user);
  }

  logIn = (event, email, password) => {
    event.preventDefault();
    let user = {
      email: email,
      originalPassword: password,
    };
    authActions.userLogin(user);
  };

  createCellar(event, cellar, capacity) {
    let cellarInfo = {
      name: cellar,
      capacity: capacity,
    };
    postCellar(cellarInfo).then((response) => {
      console.log(response);
    });
  }

  render() {
    const { login } = this.state;
    return (
      <div className="h-100 text-white">
        <div className="auth-header mb-4 d-flex flex-column">
          <div className="d-flex align-items-center p-4">
            <div>
              <h2 className="permanent">Bacchus</h2>
              <h3 className="subtitle">Know your wine</h3>
            </div>
            <div className="ml-2">
              <img
                src="/two-bottles.svg"
                className="two-bottles"
                alt="two-bottles"
              />
            </div>
          </div>
        </div>

        {this.state.login ? (
          <LogIn logIn={this.logIn} />
        ) : (
          <SignUp signUp={this.signUp} createCellar={this.createCellar} />
        )}

        <div
          className="position-absolute text-primary text-center w-100"
          style={{ bottom: 0 }}
        >
          <div>
            {!login
              ? "Already saved your cellar on Bacchus?"
              : "Not saved your cellar on Bacchus yet?"}
          </div>
          <div
            className="text-secondary my-2"
            onClick={() => this.setState({ login: !login })}
          >
            Click here
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return { user: authReducer };
};

export default connect(mapStateToProps)(HomePage);
