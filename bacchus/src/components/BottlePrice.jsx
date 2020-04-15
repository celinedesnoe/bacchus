import React from "react";

const BottlePrice = ({ price }) => {
  return (
    <div className="mt-3 p-3 bottle-card-details">
      <div className="label-input pb-1 mr-4 mb-2">Price of one bottle</div>
      <div className="badge badge-tertiary">{price} $</div>
    </div>
  );
};

export default BottlePrice;
