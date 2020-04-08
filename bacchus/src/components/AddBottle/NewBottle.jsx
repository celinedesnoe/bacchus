import React, { useState } from "react";
import { history } from "../../_helpers/history";
import { bottleActions } from "../../_actions";

import NewBottleStep1 from "./NewBottleStep1.jsx";
import NewBottleStep2 from "./NewBottleStep2.jsx";
import NewBottleStep3 from "./NewBottleStep3.jsx";
import NewBottleStep5 from "./NewBottleStep5.jsx";
import Button from "../Button.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewBottle = props => {
  const [step, setStep] = useState(1);
  const [bottle, setBottle] = useState({});

  const setDetails1 = (name, color, millesime) => {
    bottle.name = name;
    bottle.color = color;
    bottle.millesime = millesime;
    setBottle(bottle);
  };

  const setDetails2 = (cepage, appellation, region, country) => {
    bottle.cepage = cepage;
    bottle.appellation = appellation;
    bottle.region = region;
    bottle.country = country;
    setBottle(bottle);
  };

  const setDetails3 = (nb, price) => {
    bottle.nb = nb;
    bottle.price = price;
    setBottle(bottle);
  };

  // const setDetails4 = picture => {
  //   bottle.picture = picture;
  //   setBottle(bottle);
  // };

  const save = () => {
    bottleActions.addBottle(bottle);
    history.push("/");
  };

  const findStep = () => {
    switch (step) {
      case 1:
        return <NewBottleStep1 setDetails={setDetails1} bottle={bottle} />;
      case 2:
        return <NewBottleStep2 setDetails={setDetails2} bottle={bottle} />;
      case 3:
        return <NewBottleStep3 setDetails={setDetails3} bottle={bottle} />;
      case 4:
        return <NewBottleStep5 bottle={bottle} />;
      // case 5:
      //   return <NewBottleStep5 setDetails={setDetails4} bottle={bottle} />;
    }
  };

  return (
    <div>
      <div className="header-new-bottle d-flex justify-content-center py-4 position-relative">
        <div
          className="position-absolute p-2 close cursor-pointer text-primary"
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
            onClick={() => (step === 4 ? save() : setStep(step + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBottle;
