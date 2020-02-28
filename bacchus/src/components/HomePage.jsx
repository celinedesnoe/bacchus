import React, { Component } from "react";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";
import { postSignUp } from "../api";
import SvgTwoBottles from "./SvgTwoBottles";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      email: "aaa@aa.fr",
      originalPassword: "abc123"
    };
    postSignUp(user).then(response => {
      console.log(response);
      // this.props.signupSuccess(response.data);
      // this.setState({ addPhoneNumber: true });
    });
  }

  render() {
    return (
      <div className="h-100 text-white">
        <div className="auth-header mb-4 d-flex flex-column">
          <div className="d-flex align-items-center p-4">
            <div>
              <h2 className="permanent">Bacchus</h2>
              <h3 className="subtitle">Know your wine</h3>
            </div>
            <div>
              <img
                src="/two-bottles.svg"
                className="two-bottles"
                al="two-bottles"
              />
              {/* <SvgTwoBottles className="two-bottles" /> */}
            </div>
          </div>
        </div>

        <div className="position-absolute card log-in-box d-flex align-items-center flex-column mt-3">
          <h4 className="my-4 text-dark">Log in to your cellar</h4>
          <form onSubmit={console.log("SUBMIT")}>
            <div className="w-100 px-5">
              <Input placeholder="Email" className="mb-2" />
            </div>
            <div className="w-100 px-5">
              <Input placeholder="Password" className="mb-2" />
            </div>
            {/* <Link to="/dashboard"> */}
            <div className="w-100 px-5 mt-3">
              <div className="button" onClick={e => this.handleSubmit(e)}>
                Log in
              </div>
            </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
