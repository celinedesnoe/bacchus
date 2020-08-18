import React, { useState } from "react";
import { history } from "../../_helpers/history";
import { bottleActions } from "../../_actions";

import NewBottleStep1 from "./NewBottleStep1.jsx";
import NewBottleStep2 from "./NewBottleStep2.jsx";
import NewBottleStep3 from "./NewBottleStep3.jsx";
import NewBottleStep4 from "./NewBottleStep4.jsx";
import Button from "../Button.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewBottle = () => {
  const [step, setStep] = useState(1);
  const [bottle, setBottle] = useState({});
  const [error, setError] = useState(null);

  const setDetails1 = (name, color, vintage) => {
    bottle.name = name;
    bottle.color = color;
    bottle.vintage = vintage;
    setBottle(bottle);
    setError(false);
  };

  const setDetails2 = (cepage, appellation, region, country) => {
    bottle.cepage = cepage;
    bottle.appellation = appellation;
    bottle.region = region;
    bottle.country = country;
    setBottle(bottle);
  };

  const setDetails3 = (nb, price, pic) => {
    bottle.nb = nb;
    bottle.price = price;
    bottle.pictures = pic;
    setBottle(bottle);
  };

  const save = () => {
    bottleActions.addBottle(bottle);
    history.push("/");
  };

  const findStep = () => {
    switch (step) {
      case 1:
        return (
          <NewBottleStep1
            setDetails={setDetails1}
            bottle={bottle}
            error={error}
          />
        );
      case 2:
        return <NewBottleStep2 setDetails={setDetails2} bottle={bottle} />;
      case 3:
        return <NewBottleStep3 setDetails={setDetails3} bottle={bottle} />;
      case 4:
        return <NewBottleStep4 bottle={bottle} />;
      default:
        return (
          <NewBottleStep1
            setDetails={setDetails1}
            bottle={bottle}
            error={error}
          />
        );
    }
  };

  const nextStep = () => {
    if (!bottle.name) {
      setError("The name of the château or domain is required");
    } else {
      setError(false);
      step === 4 ? save() : setStep(step + 1);
    }
  };

  return (
    <div>
      <div className="header-new-bottle d-flex justify-content-center py-4 position-relative">
        <div
          className="position-absolute p-2 close-icon cursor-pointer text-white"
          onClick={() => history.push("/")}
        >
          <FontAwesomeIcon icon={["fa", "times"]} />
        </div>
        <h4 className="extrabold m-0">New wine</h4>
      </div>
      <div>
        <div className="d-flex flex-column justify-content-center my-5 mx-3">
          {findStep()}
          <div className="d-flex justify-content-center mt-4">
            {[1, 2, 3, 4].map((oneStep, index) => (
              <div
                key={oneStep}
                className={`dot-step ${index + 1 === step && "selected"}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center mx-3">
          {step > 1 && (
            <Button
              text="Previous"
              className="mr-3 w-100 button-secondary"
              onClick={() => setStep(step - 1)}
            />
          )}
          <Button
            text={step === 4 ? "Save" : "Next"}
            className={`${step > 1 && "ml-3"} w-100`}
            onClick={nextStep}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBottle;
