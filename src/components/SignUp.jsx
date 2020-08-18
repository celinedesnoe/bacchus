import React, { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const submitSignup = (e) => {
    let error = {};
    let checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!checkEmail) {
      error.email = "Please enter a correct email address";
    }
    if (!name) {
      error.name = "Name is required";
    }
    if (!email) {
      error.email = "Email is required";
    }
    if (!password) {
      error.password = "Password is required";
    }
    setError(error);
    if (name && email && password) {
      props.signUp(e, name, email, password);
    }
  };
  return (
    <>
      <div className="position-absolute card log-in-box d-flex align-items-center flex-column mt-3">
        <div>
          <>
            <h4 className="my-4 text-dark">Create your account</h4>
            <form className="w-100">
              <div className="w-100">
                <Input
                  placeholder="John"
                  className="mb-3"
                  title="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setError({});
                  }}
                  value={name}
                  error={error.name}
                />
              </div>
              <div className="w-100">
                <Input
                  placeholder="john.doe@gmail.com"
                  className="mb-3"
                  title="E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError({});
                  }}
                  value={email}
                  error={error.email}
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
                    setError({});
                  }}
                  value={password}
                  error={error.password}
                />
              </div>
              <div className="w-100 mt-4">
                <Button
                  text="Next"
                  className="py-2"
                  onClick={(e) => {
                    submitSignup(e);
                  }}
                />
              </div>
            </form>
          </>
        </div>
      </div>
    </>
  );
};

export default SignUp;
