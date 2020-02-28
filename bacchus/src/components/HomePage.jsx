import React, { Component } from "react";
import Input from "./Input.jsx";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";

import { Link } from "react-router-dom";
import { postSignUp, postCellar } from "../api";
import SvgTwoBottles from "./SvgTwoBottles";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      login: true,
      signup: false
    };
  }

  signUp(event, name, email, password) {
    event.preventDefault();
    let user = {
      email: email,
      originalPassword: password,
      name: name
    };
    postSignUp(user).then(response => {
      console.log(response);
      // this.props.signupSuccess(response.data);
    });
  }

  createCellar(event, cellar, capacity) {
    let cellarInfo = {
      name: cellar,
      capacity: capacity
    };
    console.log(cellarInfo);
    postCellar(cellarInfo).then(response => {
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
                al="two-bottles"
              />
            </div>
          </div>
        </div>

        {this.state.login ? (
          <LogIn onSubmit={this.logIn} />
        ) : (
          <SignUp signUp={this.signUp} createCellar={this.createCellar} />
        )}

        <div
          className="position-absolute text-primary"
          style={{ bottom: 0 }}
          onClick={() => this.setState({ login: !login })}
        >
          Already saved your cellar on Bacchus? Click here
        </div>
      </div>
    );
  }
}

export default HomePage;
