import React, { useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewBottleStep2 = props => {
  const [cepage, setCepage] = useState("");
  const [appellation, setAppellation] = useState("");

  return (
    <div>
      <div className="card">
        <div>Add your bottle</div>
        <Input
          title="Cépage"
          placeholder="Pinot Noir"
          className="mb-3"
          onChange={e => setCepage(e.target.value)}
          value={cepage}
        />
        <Input
          title="Appellation"
          placeholder="Margaux"
          className="mb-3"
          onChange={e => setAppellation(e.target.value)}
          value={appellation}
        />
      </div>
    </div>
  );
};

export default NewBottleStep2;
