import React, { useState, useEffect, useRef } from "react";

const Searchable = (props) => {
  const id = "input-id-" + Math.round(Math.random() * 1000);
  const [value, setValue] = useState("");
  const [seeOptions, setSeeOptions] = useState(false);
  const [options, setFilteredOptions] = useState(props.options);

  const refOptions = useRef();

  const filterOptions = () => {
    let allOptions = props.options;
    let filteredOptions = allOptions.filter((option) => option.includes(value));
    setFilteredOptions(filteredOptions);
  };

  useEffect(() => {
    filterOptions();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [value]);

  const handleClickOutside = (e) => {
    if (!refOptions.current?.contains(e.target)) {
      setSeeOptions(false);
    }
  };

  return (
    <div
      className={`${props.className ? props.className : ""} position-relative`}
    >
      {props.title && <div className="label-input mb-2">{props.title}</div>}
      <div ref={refOptions}>
        <input
          className={`form-control pb-1  ${
            props.error ? "input-invalid mb-1" : ""
          }   `}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
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
          onFocus={() => setSeeOptions(true)}
        />

        {seeOptions && options && options.length > 0 && (
          <div className="input-list">
            {options.map((option) => {
              return (
                <div
                  className="input-options my-2 p-2"
                  value={option}
                  key={option}
                  onClick={() => {
                    setValue(option);
                    props.onChange(option);
                    setSeeOptions(false);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {props.error && <div className="input-error">{props.error}</div>}
    </div>
  );
};

export default Searchable;
