import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottleSelectorNumber = ({ number, updateNumber }) => {
  const [nbBottles, setNbBottles] = useState(number ? number : 0);
  const [wording, setWording] = useState(number > 1 ? "bottles" : "bottle");

  useEffect(() => {
    if (number !== nbBottles) {
      let text = nbBottles > 1 ? "bottles" : "bottle";
      updateNumber(nbBottles);
      setWording(text);
    }
  }, [nbBottles]);

  return (
    <div className="mt-3 p-3 bottle-card-details w-100">
      <div className="label-input ">Number of bottles in stock</div>

      <div
        className={`bottles-selector-number d-flex align-items-center justify-content-center mt-3`}
      >
        <div
          className="counter-button"
          onClick={() => setNbBottles(nbBottles - 1)}
        >
          <FontAwesomeIcon icon={["fa", "minus"]} />
        </div>
        <div className="counter-bottles badge mx-2">
          {nbBottles} {wording}
        </div>

        <div
          className="counter-button"
          onClick={() => setNbBottles(nbBottles + 1)}
        >
          <FontAwesomeIcon icon={["fa", "plus"]} />
        </div>
      </div>
    </div>
  );
};

export default BottleSelectorNumber;
