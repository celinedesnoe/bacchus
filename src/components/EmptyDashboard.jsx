import React from "react";
import Button from "./Button";
import { history } from "../_helpers/history";

const EmptyDashboard = (props) => {
  return (
    <div className="card empty-dashboard-box d-flex align-items-center flex-column mt-3">
      <div className="my-3 extrabold">No bottles yet?</div>
      <div className="mb-3">
        <img
          src="/two-bottles-yellow.svg"
          className="two-bottles"
          alt="two-bottles"
        />
      </div>
      <Button
        text="Add a bottle"
        className="my-2 w-100"
        onClick={() => history.push("/new-bottle")}
      />
    </div>
  );
};

export default EmptyDashboard;
