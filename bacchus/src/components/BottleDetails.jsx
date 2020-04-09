import React, { useState, useEffect } from "react";
import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";

const BottleDetails = ({ bottle }) => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="position-absolute layer"></div>
      <div className="position-absolute bg-white bottle-details px-4">
        <BottleHeader bottle={bottle} />
        <BottleComments />
      </div>
    </div>
  );
};

export default BottleDetails;
