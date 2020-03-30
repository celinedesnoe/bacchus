import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const EmptyDashboard = props => {
  return (
    <div className="card empty-dashboard-box d-flex align-items-center flex-column mt-3">
      <div className="my-3 extrabold">No bottles yet?</div>
      <div className="mb-3">
        <img
          src="/two-bottles-yellow.svg"
          className="two-bottles"
          al="two-bottles"
        />
      </div>
      <Button text="Add a bottle" className="my-2" />
    </div>
  );
};

export default EmptyDashboard;
