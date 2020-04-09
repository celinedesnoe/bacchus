import React, { useState, useEffect } from "react";

const BottleHeader = ({ bottle }) => {
  const [bottlePicto, setBottlePicto] = useState("");

  useEffect(() => {
    findBottlePicto();
  }, []);

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

  return (
    <div>
      <div className="position-absolute new-bottle-name">
        <img alt="bottle" src={`/${bottlePicto}`} className="bottle-picto" />
      </div>
      <div className="pl-5 mt-3">
        <div className="extrabold">{bottle.name}</div>
        <div className="d-flex row mt-4">
          {bottle.vintage && (
            <div className="col-6">
              <div className="label-input pb-1 mr-4">Vintage</div>
              <div className="">{bottle.vintage}</div>
            </div>
          )}
          {(bottle.region || bottle.country) && (
            <div className="col-6">
              <div className="label-input pb-1">Origin</div>
              <div className="">
                {bottle.region ? bottle.region : ""}
                {bottle.country
                  ? bottle.region
                    ? ", " + bottle.country
                    : bottle.country
                  : ""}
              </div>
            </div>
          )}
        </div>
        <div className="d-flex row mt-3">
          {bottle.appellation && (
            <div className="col-6">
              <div className="label-input pb-1 mr-4">Appellation</div>
              <div className="">{bottle.appellation}</div>
            </div>
          )}
          {bottle.cepage && (
            <div className="col-6">
              <div className="label-input pb-1">Cépage</div>
              <div className="">{bottle.cepage ? bottle.cepage : "N/A"}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottleHeader;
