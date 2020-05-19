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
    <div className="">
      <div
        className={`bottles-badge d-flex align-items-center justify-content-center`}
      >
        <div
          className="counter-button"
          onClick={() => setNbBottles(nbBottles - 1)}
        >
          <FontAwesomeIcon icon={["fa", "minus"]} />
        </div>
        <div className="counter-bottles badge">
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
