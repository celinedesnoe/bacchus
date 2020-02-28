import React, { useState } from "react";
import Input from "./Input.jsx";

const LogIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="position-absolute card log-in-box d-flex align-items-center flex-column mt-3">
        <div>
          <h4 className="my-4 text-dark">Log in to your cellar</h4>
          <form onSubmit={console.log("SUBMIT")} className="w-100">
            <div className="w-100">
              <Input
                placeholder="john.doe@gmail.com"
                className="mb-3"
                title="E-mail"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="w-100">
              <Input
                placeholder="Your secret password"
                className="mb-3"
                title="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="w-100 mt-5">
              <div
                className="button"
                onClick={e => console.log(email, password)}
              >
                Log in
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
