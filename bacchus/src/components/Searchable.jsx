import React, { useState, useEffect, useRef } from "react";

const Searchable = (props) => {
  const id = "input-id-" + Math.round(Math.random() * 1000);
  const [value, setValue] = useState("");
  const [seeOptions, setSeeOptions] = useState(false);
  const [options, setFilteredOptions] = useState(props.options);
  const [indexHover, setIndexHover] = useState(0);

  const refOptions = useRef();

  const filterOptions = () => {
    let allOptions = props.options;
    let filteredOptions = allOptions.filter((option) => option.includes(value));
    setFilteredOptions(filteredOptions);
  };

  useEffect(() => {
    filterOptions();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", chooseOption);
    console.log("indexHover", indexHover);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", chooseOption);
    };
  }, [value, indexHover]);

  const handleClickOutside = (e) => {
    if (!refOptions.current?.contains(e.target)) {
      setSeeOptions(false);
      setIndexHover(0);
    }
  };

  const chooseOption = (e) => {
    switch (e.keyCode) {
      case 40:
        indexHover < options.length - 1 && setIndexHover(indexHover + 1);
        return console.log("40", indexHover);
      case 38:
        indexHover > 0 && setIndexHover(indexHover - 1);
        return console.log("38", indexHover);
      case 13:
        selectValue();
      default:
        return;
    }
  };

  const selectValue = () => {
    let option = options.find((option, index) => {
      return index === indexHover;
    });
    console.log("option", option);
    setValue(option);
    setSeeOptions(false);
    setIndexHover(0);
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
          autoFocus={props.autoFocus}
          onFocus={() => setSeeOptions(true)}
          autoComplete="off"
        />

        {seeOptions && options && options.length > 0 && (
          <div className="input-list">
            {options.map((option, index) => {
              return (
                <div
                  className={`input-options my-2 p-2 ${index === indexHover &&
                    "hovered"}`}
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
