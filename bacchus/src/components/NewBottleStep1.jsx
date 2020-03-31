import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import ColorSelector from "./ColorSelector";
import MillesimeSelector from "./MillesimeSelector";

const NewBottleStep1 = props => {
  const [name, setName] = useState("");

  return (
    <div className="d-flex justify-content-center px-4">
      <div className="card">
        <div>Add your bottle</div>
        <Input
          placeholder="Château Margaux"
          className="mb-3"
          title="Name of the château or domain*"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <ColorSelector />
        <MillesimeSelector />
      </div>
    </div>
  );
};

export default NewBottleStep1;
