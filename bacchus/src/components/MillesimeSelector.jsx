import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MillesimeSelector = props => {
  const [millesime, setMillesime] = useState(2015);

  return (
    <div className="mb-3">
      <div className="label-input mb-2">Millésime</div>
      <div className="d-flex align-items-center">
        <div
          className="text-primary-light"
          onClick={() => setMillesime(millesime - 1)}
        >
          <FontAwesomeIcon icon={["fa", "chevron-left"]} />
        </div>
        <div className="millesime-card py-2 px-3 mx-3">{millesime}</div>
        <div
          className="text-primary-light"
          onClick={() => setMillesime(millesime + 1)}
        >
          <FontAwesomeIcon icon={["fa", "chevron-right"]} />
        </div>
        <div className="millesime-card py-2 px-3 mx-3">N/A</div>
      </div>
    </div>
  );
};

export default MillesimeSelector;
