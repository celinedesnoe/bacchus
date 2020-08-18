import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorInput = props => {
  return (
    <div
      className={`color-input d-flex align-items-center py-2 mr-3 ${
        props.className
      } ${props.isSelected && "selected"}`}
      onClick={props.select && props.select}
    >
      <div className="radio mx-2 d-flex align-items-center justify-content-center">
        {props.isSelected && <FontAwesomeIcon icon={["fa", "check"]} />}
      </div>
      <div>{props.color}</div>
    </div>
  );
};

export default ColorInput;
