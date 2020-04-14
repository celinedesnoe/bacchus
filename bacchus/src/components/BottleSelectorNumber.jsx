import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottleSelectorNumber = ({ number }) => {
  const wording = number > 1 ? "bottles" : "bottle";

  return (
    <div
      className={`bottles-selector-number d-flex align-items-center justify-content-center my-3`}
    >
      <div className="counter-button">
        {" "}
        <FontAwesomeIcon icon={["fa", "minus"]} />
      </div>
      <div className="counter-bottles p-2 mx-2">
        {number ? number : 0} {wording}
      </div>

      <div className="counter-button">
        <FontAwesomeIcon icon={["fa", "plus"]} />
      </div>
    </div>
  );
};

export default BottleSelectorNumber;
