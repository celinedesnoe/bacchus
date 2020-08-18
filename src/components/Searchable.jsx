import React, { useState, useEffect, useRef } from "react";

const Searchable = (props) => {
  const id = "input-id-" + Math.round(Math.random() * 1000);
  const [value, setValue] = useState("");
  const [seeOptions, setSeeOptions] = useState(false);
  const [options, setFilteredOptions] = useState(props.options);
  const [indexHover, setIndexHover] = useState(0);

  const refOptions = useRef();

  useEffect(() => {
    const filterOptions = () => {
      let allOptions = props.options;
      let filteredOptions = allOptions.filter((option, index) =>
        option.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredOptions(filteredOptions);
    };

    const chooseOption = (e) => {
      switch (e.keyCode) {
        case 40:
          return (
            indexHover < options.length - 1 && setIndexHover(indexHover + 1)
          );
        case 38:
          return indexHover > 0 && setIndexHover(indexHover - 1);
        case 13:
          return selectValue();
        default:
          return;
      }
    };

    filterOptions();
    if (props.value) {
      setValue(props.value);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", chooseOption);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", chooseOption);
    };
  }, [value, indexHover, props.value, props.options, options.length]);

  const handleClickOutside = (e) => {
    if (!refOptions.current?.contains(e.target)) {
      setSeeOptions(false);
      setIndexHover(0);
    }
  };

  const selectValue = () => {
    let option = options.find((option, index) => {
      return index === indexHover;
    });
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
            props.resetValue && props.resetValue();
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
                  className={`input-options my-2 p-2 ${
                    index === indexHover && "hovered"
                  }`}
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
