import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import ColorSelector from "./ColorSelector";
import MillesimeSelector from "./MillesimeSelector";

const NewBottleStep1 = props => {
  const [name, setName] = useState("");

  return (
    <div className="card card-new-bottle w-100">
      <div className="d-flex justify-content-center mb-4 mt-3">
        Add your bottle
      </div>
      <Input
        placeholder="Château Margaux"
        className="mb-4"
        title="Name of the château or domain*"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <ColorSelector />
      <MillesimeSelector />
    </div>
  );
};

export default NewBottleStep1;
