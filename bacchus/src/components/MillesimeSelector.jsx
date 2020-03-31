import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MillesimeSelector = props => {
  const [color, setColor] = useState("");

  return (
    <div>
      <div className="label-input">Millésime</div>
    </div>
  );
};

export default MillesimeSelector;
