import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postPicture } from "../_services/api";

const AddPictureBtn = (props) => {
  const uploadChange = (event) => {
    const { files } = event.target;
    props.checkLoadingPic && props.checkLoadingPic(true);
    postPicture(files[0]).then((response) => {
      props.uploadPicture && props.uploadPicture(response.data.fileUrl);
    });
  };

  return (
    <div className="btn-add-picture">
      <div>
        <FontAwesomeIcon icon={["fa", "camera"]} />
      </div>
      <input
        onChange={(e) => uploadChange(e)}
        type="file"
        accept="image/png, image/jpeg"
        multiple
        name="files"
        is="image"
        className="file-upload"
        id="upload"
      />
    </div>
  );
};

export default AddPictureBtn;
