import React from "react";

const Button = props => {
  const text = props.text ? props.text : "Click";
  return (
    <div
      className={`button py-2 px-3 ${props.className} ${props.filter &&
        !props.selected &&
        "filter-not-selected"}`}
      onClick={props.onClick ? props.onClick : null}
      type={props.type}
    >
      {text}
    </div>
  );
};

export default Button;
