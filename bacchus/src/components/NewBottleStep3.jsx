import React, { useState, useEffect } from "react";
import Input from "./Input";

const NewBottleStep3 = ({ bottle, setDetails }) => {
  const [bottlesNumber, setBottlesNumber] = useState(bottle.nb);
  const [price, setPrice] = useState(bottle.price);

  useEffect(() => {
    setDetails(bottlesNumber, price);
  }, [bottlesNumber, price]);

  return (
    <div>
      <div className="card">
        <div className="d-flex justify-content-center mb-4 mt-3">
          Add some figures
        </div>
        <Input
          title="Number of bottles"
          placeholder="3"
          className="mb-3"
          onChange={e => setBottlesNumber(e.target.value)}
          value={bottlesNumber}
          type="number"
        />
        <Input
          title="Price per bottle"
          placeholder="30$"
          className="mb-3"
          onChange={e => setPrice(e.target.value)}
          value={price}
          type="number"
        />
      </div>
    </div>
  );
};

export default NewBottleStep3;
