import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VintageSelector = ({ addVintage, bottleVintage }) => {
  const [vintage, setVintage] = useState(bottleVintage ? bottleVintage : null);
  useEffect(() => {
    addVintage(vintage);
  }, [vintage]);

  console.log(typeof vintage);
  return (
    <div className="mb-3">
      <div className="label-input mb-2">Vintage</div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setVintage(!vintage ? 2014 : vintage - 1)}
          >
            <FontAwesomeIcon icon={["fa", "chevron-left"]} />
          </div>
          <div className="vintage-card px-3 mx-2">
            <input
              value={!vintage ? "?" : vintage}
              onChange={e => {
                let value = parseInt(e.target.value);
                setVintage(value);
              }}
              type="number"
              placeholder="2015"
              className="input-inline form-control"
            />
          </div>
          <div
            className="counter-icon text-primary-light cursor-pointer"
            onClick={() => setVintage(!vintage ? 2016 : vintage + 1)}
          >
            <FontAwesomeIcon icon={["fa", "chevron-right"]} />
          </div>
        </div>
        <div
          className={`vintage-card py-2 px-3 mx-3 cursor-pointer ${!vintage &&
            "selected"}`}
          onClick={() => setVintage(null)}
        >
          Non-vintage
        </div>
      </div>
    </div>
  );
};

export default VintageSelector;
