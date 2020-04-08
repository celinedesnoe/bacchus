import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MillesimeSelector = ({ addMillesime, bottleMillesime }) => {
  const [millesime, setMillesime] = useState(
    bottleMillesime ? bottleMillesime : 2015
  );
  useEffect(() => {
    addMillesime(millesime);
  }, [millesime]);

  return (
    <div className="mb-3">
      <div className="label-input mb-2">Millésime</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setMillesime(millesime - 1)}
          >
            <FontAwesomeIcon icon={["fa", "chevron-left"]} />
          </div>
          <div className="millesime-card py-2 px-3 mx-2">
            {millesime ? millesime : "?"}
          </div>
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setMillesime(millesime + 1)}
          >
            <FontAwesomeIcon icon={["fa", "chevron-right"]} />
          </div>
        </div>
        <div
          className={`millesime-card py-2 px-3 mx-3 cursor-pointer ${!millesime &&
            "selected"}`}
          onClick={() => setMillesime(null)}
        >
          I don't know
        </div>
      </div>
    </div>
  );
};

export default MillesimeSelector;
