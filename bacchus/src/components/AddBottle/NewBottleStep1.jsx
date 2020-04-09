import React, { useState } from "react";
import Input from "../Input";
import ColorSelector from "./ColorSelector";
import MillesimeSelector from "./MillesimeSelector";
import { useEffect } from "react";

const NewBottleStep1 = ({ setDetails, bottle, error }) => {
  const [name, setName] = useState(bottle.name ? bottle.name : "");
  const [color, setColor] = useState(bottle.color ? bottle.color : "");
  const [millesime, setMillesime] = useState(
    bottle.millesime ? bottle.millesime : ""
  );

  useEffect(() => {
    setDetails(name, color, millesime);
  }, [name, color, millesime]);

  return (
    <div className="card card-new-bottle w-100">
      <div className="d-flex justify-content-center mb-4 mt-3">
        Add your bottle
      </div>
      <Input
        placeholder="Château Margaux"
        className={"mb-4"}
        title="Name of the château or domain*"
        onChange={e => setName(e.target.value)}
        value={name}
        error={error}
      />
      <ColorSelector addColor={setColor} bottleColor={bottle.color} />
      <MillesimeSelector
        addMillesime={setMillesime}
        bottleMillesime={bottle.millesime}
      />
    </div>
  );
};

export default NewBottleStep1;
