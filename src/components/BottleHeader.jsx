import React, { useState, useEffect } from "react";

const BottleHeader = ({ bottle, className }) => {
  const [bottlePicto, setBottlePicto] = useState("");

  useEffect(() => {
    const findBottlePicto = () => {
      switch (bottle.color) {
        case "red":
          return setBottlePicto("redwine.svg");
        case "white":
          return setBottlePicto("whitewine.svg");
        case "rosé":
          return setBottlePicto("roséwine.svg");
        default:
          return setBottlePicto("unknownwine.svg");
      }
    };
    findBottlePicto();
  });

  return (
    <div>
      <div className="position-absolute new-bottle-name">
        <img alt="bottle" src={`/${bottlePicto}`} className="bottle-picto" />
      </div>
      <div className={`ml-5 mt-3 ${className}`}>
        <div className="text-grey mb-1">{bottle.vintage}</div>
        <div className="extrabold mb-2">{bottle.name}</div>

        <div className="mb-1">
          <img src="/place.svg" className="icon-wine" alt="place" />
          {bottle.appellation && bottle.appellation + ", "}

          {(bottle.region || bottle.country) && bottle.region
            ? bottle.region
            : ""}
          {bottle.country
            ? bottle.region
              ? ", " + bottle.country
              : bottle.country
            : ""}
        </div>

        {bottle.cepage && (
          <div>
            <img src="/grape.svg" className="icon-wine" alt="grape" />
            {bottle.cepage}
          </div>
        )}
      </div>
    </div>
  );
};

export default BottleHeader;
