import React, { useState } from "react";
import Input from "./Input.jsx";

const SignUp = props => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellar, setCellar] = useState("");
  const [capacity, setCapacity] = useState(0);

  return (
    <>
      <div className="position-absolute card log-in-box d-flex align-items-center flex-column mt-3">
        <div>
          {step === 1 ? (
            <>
              <h4 className="my-4 text-dark">Create your account</h4>
              <form onSubmit={console.log("SUBMIT")} className="w-100">
                <div className="w-100">
                  <Input
                    placeholder="John"
                    className="mb-3"
                    title="Name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="w-100">
                  <Input
                    placeholder="john.doe@gmail.com"
                    className="mb-3"
                    title="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="w-100">
                  <Input
                    placeholder="Your secret password"
                    className="mb-3"
                    title="Password"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="w-100 mt-5">
                  <div
                    className="button"
                    onClick={e => {
                      setStep(2);
                      props.signUp(e, name, email, password);
                    }}
                  >
                    Next
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <h4 className="my-4 text-dark">Create your cellar</h4>
              <form onSubmit={console.log("SUBMIT")} className="w-100">
                <div className="w-100">
                  <Input
                    placeholder="Home"
                    className="mb-3"
                    title="Name of your cellar"
                    onChange={e => setCellar(e.target.value)}
                    value={cellar}
                  />
                </div>
                <div className="w-100">
                  <Input
                    placeholder="50"
                    className="mb-3"
                    title="Capacity"
                    type="number"
                    onChange={e => setCapacity(e.target.value)}
                    value={capacity}
                  />
                </div>

                <div className="w-100 mt-5">
                  <div
                    className="button"
                    onClick={e => {
                      {
                        props.createCellar(e, cellar, capacity);
                      }
                    }}
                  >
                    Ready to start?{" "}
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
