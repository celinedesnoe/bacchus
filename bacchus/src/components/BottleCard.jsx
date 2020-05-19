import React, { useState, useEffect } from "react";

const BottleCard = ({ bottle, seeDetails }) => {
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
    <div
      className={`card card-bottle card-bottle-${bottle.color} mb-4`}
      onClick={() => seeDetails(bottle)}
    >
      <div className="position-absolute new-bottle-name">
        <img alt="bottle" src={`/${bottlePicto}`} className="bottle-picto" />
      </div>
      <div className="pl-5 mt-3">
        <div className="small text-grey mb-1">{bottle.vintage}</div>
        <div className="extrabold ">{bottle.name}</div>
      </div>
    </div>
  );
};

export default BottleCard;
