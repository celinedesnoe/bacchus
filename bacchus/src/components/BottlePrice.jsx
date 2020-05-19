import React from "react";

const BottlePrice = ({ price }) => {
  return (
    <div className="bottles-badge">
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-white badge">{price} $</div>
      </div>
    </div>
  );
};

export default BottlePrice;
