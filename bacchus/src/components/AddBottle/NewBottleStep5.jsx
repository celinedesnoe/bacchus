import React, { useState, useEffect } from "react";

const NewBottleStep5 = ({ bottle, setDetails }) => {
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
      <div className="d-flex justify-content-center my-3">
        The bottle you want to add is:
      </div>
      <div className="card card-new-bottle">
        <div className="position-absolute new-bottle-name">
          <img alt="bottle" src={`/${bottlePicto}`} className="bottle-picto" />
        </div>
        <div className="pl-5 mt-3">
          <div>{bottle.name}</div>
          <div className="d-flex row mt-4">
            {bottle.millesime && (
              <div className="col-6">
                <div className="label-input pb-1 mr-4">Millésime</div>
                <div className="">{bottle.millesime}</div>
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
        <div className="d-flex justify-content-between mt-4">
          {bottle.nb && (
            <div className="badge badge-primary">
              {bottle.nb} bottle{bottle.nb > 1 && "s"}
            </div>
          )}
          {bottle.price && (
            <div className="badge badge-tertiary">
              {bottle.price ? bottle.price : "?"} $
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewBottleStep5;
