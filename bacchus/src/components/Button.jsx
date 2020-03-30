import React from "react";

const Button = props => {
  const text = props.text ? props.text : "Click";
  return (
    <div
      className={`button px-2 ${props.className} ${props.filter &&
        !props.selected &&
        "filter-not-selected"}`}
      onClick={e => console.log(e)}
    >
      {text}
    </div>
  );
};

export default Button;
