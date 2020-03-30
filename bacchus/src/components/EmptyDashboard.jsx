import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const EmptyDashboard = props => {
  return (
    <div className="card empty-dashboard-box d-flex align-items-center flex-column mt-3">
      <div>No bottles yet?</div>
      <div>
        <img
          src="/two-bottles-yellow.svg"
          className="two-bottles"
          al="two-bottles"
        />
      </div>
      <Button text="Add a bottle" />
    </div>
  );
};

export default EmptyDashboard;
