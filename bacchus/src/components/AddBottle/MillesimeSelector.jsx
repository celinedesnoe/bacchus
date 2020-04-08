import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MillesimeSelector = ({ addMillesime, bottleMillesime }) => {
  const [millesime, setMillesime] = useState(
    bottleMillesime ? bottleMillesime : null
  );
  useEffect(() => {
    addMillesime(millesime);
  }, [millesime]);

  console.log(typeof millesime);
  return (
    <div className="mb-3">
      <div className="label-input mb-2">Millésime</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setMillesime(!millesime ? 2015 : millesime - 1)}
          >
            <FontAwesomeIcon icon={["fa", "chevron-left"]} />
          </div>
          <div className="millesime-card px-3 mx-2">
            <input
              value={!millesime ? "?" : millesime}
              onChange={e => {
                let value = parseInt(e.target.value);
                setMillesime(value);
              }}
              type="number"
              placeholder="2015"
              className="input-inline form-control"
            />
          </div>
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setMillesime(!millesime ? 2015 : millesime + 1)}
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
