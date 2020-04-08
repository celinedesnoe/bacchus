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
    }
  };

  return (
    <div className={`card card-bottle card-bottle-${bottle.color} mb-4`}>
      <div className="position-absolute new-bottle-name">
        <img alt="bottle" src={`/${bottlePicto}`} className="bottle-picto" />
      </div>
      <div className="pl-5 mt-3">
        <div className="extrabold mb-1">{bottle.name}</div>
        <div className="small text-grey">{bottle.millesime}</div>
      </div>
    </div>
  );
};

export default NewBottleStep5;
