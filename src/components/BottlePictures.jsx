import React, { useState } from "react";
import Viewer from "./Viewer.jsx";
// import Viewer from "react-viewer";

import AddPictureBtn from "./AddPictureBtn.jsx";

const BottlePictures = ({ pictures, addPicture }) => {
  const [pics, setPictures] = useState(pictures);
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const uploadPicture = (url) => {
    setPictures([...pictures, url]);
    addPicture(url);
    setLoading(false);
  };

  const checkLoadingPic = (state) => {
    setLoading(state);
  };

  const openPic = (picture) => {
    setVisible(picture);
  };

  return (
    <div className="mr-3 p-3 w-100">
      <div className="card-label mb-2">Pictures</div>
      <div className="h-100 d-flex align-items-center">
        <AddPictureBtn
          uploadPicture={uploadPicture}
          checkLoadingPic={checkLoadingPic}
        />
        {pics.map((picture) => (
          <div
            style={{ backgroundImage: `url("${picture}")` }}
            className="pic-miniature"
            key={picture}
            onClick={() => openPic(picture)}
          />
        ))}

        <Viewer
          visible={visible}
          onClose={() => setVisible(false)}
          images={[{ src: visible, alt: visible }]}
        />
        <div
          className={`pic-miniature align-items-center justify-content-center bg-primary-light ${
            !isLoading ? "d-none" : "d-flex"
          }`}
        >
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottlePictures;
