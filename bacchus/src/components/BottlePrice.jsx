import React from "react";

const BottlePrice = ({ price }) => {
  return (
    <div className="mt-3 mr-3 p-3 bottle-card-details w-100">
      <div className="label-input">Price</div>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="badge badge-tertiary">{price} $</div>
      </div>
    </div>
  );
};

export default BottlePrice;
