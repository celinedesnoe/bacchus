import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from "../_helpers/history";

const AddButton = () => {
  return (
    <div
      className="add-button d-flex align-items-center justify-content-center cursor-pointer"
      onClick={() => history.push("/new-bottle")}
    >
      <FontAwesomeIcon icon={["fa", "plus"]} />
    </div>
  );
};

export default AddButton;
