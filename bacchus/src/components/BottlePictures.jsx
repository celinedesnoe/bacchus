import React, { useState } from "react";
import AddPictureBtn from "./AddPictureBtn.jsx";

const BottlePictures = ({ pictures, addPicture }) => {
  const [pics, setPictures] = useState(pictures);
  const [isLoading, setLoading] = useState(false);

  const uploadPicture = (url) => {
    setPictures([...pictures, url]);
    addPicture(url);
    setLoading(false);
  };

  const checkLoadingPic = (state) => {
    setLoading(state);
  };

  return (
    <div className="mt-3 mr-3 p-3 bottle-card-details w-100">
      <div className="label-input mb-2">Pictures</div>
      <div className="h-100 d-flex align-items-center">
        {pics.map((picture) => (
          <div
            style={{ backgroundImage: `url("${picture}")` }}
            className="pic-miniature"
          />
        ))}
        <AddPictureBtn
          uploadPicture={uploadPicture}
          checkLoadingPic={checkLoadingPic}
        />
      </div>
    </div>
  );
};

export default BottlePictures;
