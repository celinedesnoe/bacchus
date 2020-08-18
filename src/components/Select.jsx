import React from "react";

const Select = (props) => {
  const id = "select-id-" + Math.round(Math.random() * 1000);

  return (
    <div className={`${props.className ? props.className : ""}`}>
      {props.title && <div className="label-input mb-2">{props.title}</div>}
      <select
        className={`form-control pb-1  ${
          props.error ? "input-invalid mb-1" : ""
        }   `}
        value={props.value}
        onChange={props.onChange}
        type={props.type ? props.type : `text`}
        name={props.name}
        id={id}
        placeholder={props.placeholder}
        disabled={props.disabled}
        aria-label={props.ariaLabel ? props.ariaLabel : ""}
        aria-describedby={props.ariaDescribedby ? props.ariaDescribedby : ""}
        maxLength={props.maxLength}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
      >
        {props.options &&
          props.options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
      </select>
      {props.error && <div className="input-error">{props.error}</div>}
    </div>
  );
};

export default Select;
