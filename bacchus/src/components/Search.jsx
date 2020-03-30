import React from "react";

const Search = props => {
  const id = "input-id-" + Math.round(Math.random() * 1000);

  return (
    <div>
      {props.title && <div className="label-input">{props.title}</div>}
      <input
        className={`form-control form-search ${
          props.error ? "is-invalid" : ""
        }  ${props.className ? props.className : ""} `}
        // style={style}
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
      />
    </div>
  );
};

export default Search;
