import React, { useState } from "react";
import { history } from "../_helpers/history";
import NewBottleStep1 from "./NewBottleStep1.jsx";
import NewBottleStep2 from "./NewBottleStep2.jsx";
import NewBottleStep3 from "./NewBottleStep3.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewBottle = props => {
  const [step, setStep] = useState(1);
  const findStep = () => {
    switch (step) {
      case 1:
        return <NewBottleStep1 />;
      case 2:
        return <NewBottleStep2 />;
      case 3:
        return <NewBottleStep3 />;
    }
  };
  return (
    <div>
      <div className="header-new-bottle d-flex justify-content-center py-4 position-relative">
        <div
          className="position-absolute p-2"
          onClick={() => history.push("/")}
        >
          <FontAwesomeIcon icon={["fa", "times"]} />
        </div>
        <div className="extrabold">New wine</div>
      </div>
      {findStep()}
    </div>
  );
};

export default NewBottle;
