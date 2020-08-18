import React, { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const submitLogin = (e) => {
    let checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!checkEmail) {
      setEmailError("Please enter a correct email address");
    }
    if (!email) {
      setEmailError("Email is required");
    }

    if (!password) {
      setEmailError("Password is required");
    }

    if (password && email) {
      props.logIn(e, email, password);
    }
  };

  return (
    <>
      <div className="position-absolute card log-in-box d-flex align-items-center flex-column mt-3">
        <div>
          <h4 className="my-4 text-dark">Log in to your cellar</h4>
          <form
            onSubmit={(e) => props.logIn(e, email, password)}
            className="w-100"
          >
            <div className="w-100">
              <Input
                placeholder="john.doe@gmail.com"
                className="mb-3"
                title="E-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                value={email}
                error={emailError}
              />
            </div>
            <div className="w-100">
              <Input
                placeholder="Your secret password"
                className="mb-3"
                title="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                value={password}
                error={passwordError}
              />
            </div>
            <div className="w-100 mt-4">
              <Button
                text="Login"
                className="py-2"
                onClick={(e) => submitLogin(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
