import React, { useState } from "react";
import Input from "../Input";
import ColorSelector from "./ColorSelector";
import VintageSelector from "./VintageSelector";
import { useEffect } from "react";

const NewBottleStep1 = ({ setDetails, bottle, error }) => {
  const [name, setName] = useState(bottle.name ? bottle.name : "");
  const [color, setColor] = useState(bottle.color ? bottle.color : "");
  const [vintage, setVintage] = useState(bottle.vintage ? bottle.vintage : "");

  useEffect(() => {
    setDetails(name, color, vintage);
  }, [name, color, vintage, setDetails]);

  return (
    <div className="card card-new-bottle w-100">
      <div className="d-flex justify-content-center mb-4 mt-3">
        Add your bottle
      </div>
      <Input
        placeholder="Château Margaux"
        className={"mb-4"}
        title="Name of the château or domain*"
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={error}
      />
      <ColorSelector addColor={setColor} bottleColor={bottle.color} />
      <VintageSelector addVintage={setVintage} bottleVintage={bottle.vintage} />
    </div>
  );
};

export default NewBottleStep1;
