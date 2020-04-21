import React, { useState, useEffect } from "react";
import Input from "../Input";
import AddPictureBtn from "../AddPictureBtn";

const NewBottleStep3 = ({ bottle, setDetails, submit }) => {
  const [bottlesNumber, setBottlesNumber] = useState(bottle.nb);
  const [price, setPrice] = useState(bottle.price);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setDetails(bottlesNumber, price, pictures);
  }, [bottlesNumber, price, pictures]);

  const uploadPicture = (url) => {
    setPictures([...pictures, url]);
    setLoading(false);
  };

  const checkLoadingPic = (state) => {
    setLoading(state);
  };

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
          onChange={(e) => setBottlesNumber(e.target.value)}
          value={bottlesNumber}
          type="number"
        />
        <Input
          title="Price per bottle"
          placeholder="30$"
          className="mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
        />
        <div className="label-input mb-2">Pictures</div>
        <div className="d-flex">
          <AddPictureBtn
            uploadPicture={uploadPicture}
            checkLoadingPic={checkLoadingPic}
          />
          {pictures.map((picture) => (
            <div
              style={{ backgroundImage: `url("${picture}")` }}
              className="pic-miniature"
              key={picture}
            />
          ))}
          <div
            className={`pic-miniature d-flex align-items-center justify-content-center bg-primary-light ${!isLoading &&
              "d-none"}`}
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBottleStep3;
