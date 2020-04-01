import React, { useState, useEffect } from "react";
import ColorInput from "./ColorInput";

const ColorSelector = ({ addColor, bottleColor }) => {
  const [color, setColor] = useState(bottleColor);
  useEffect(() => {
    addColor(color);
  }, [color]);
  return (
    <div className="mb-4">
      <div className="label-input mb-2">Color</div>
      <div className="d-flex">
        <ColorInput
          color="Red"
          className={`color-input-red `}
          select={() => setColor("red")}
          isSelected={color === "red"}
        />
        <ColorInput
          color="White"
          className={`color-input-white`}
          select={() => setColor("white")}
          isSelected={color === "white"}
        />
        <ColorInput
          color="Rosé"
          className={`color-input-rosé`}
          select={() => setColor("rosé")}
          isSelected={color === "rosé"}
        />
      </div>
    </div>
  );
};

export default ColorSelector;
