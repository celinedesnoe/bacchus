import React, { useState } from "react";
import { connect } from "react-redux";

import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";
import BottleSelectorNumber from "./BottleSelectorNumber.jsx";
import BottlePrice from "./BottlePrice.jsx";
import BottlePictures from "./BottlePictures.jsx";
import AddComment from "./AddComment.jsx";

import { bottleActions } from "../_actions";

const BottleDetails = ({ bottle, detailsRef, animateDetails }) => {
  const updateNumber = (nb) => {
    bottle.nb = nb;
    bottleActions.updateBottle(bottle);
  };

  const addPicture = (url) => {
    bottle.pictures = bottle.pictures.push(url);
    bottleActions.updateBottle(bottle);
  };

  const addComment = (comment) => {
    bottle.comments.push(comment);
    bottleActions
      .updateBottle(bottle)
      .then(() => {
        setOpenAddComment(false);
      })
      .catch(() => console.log("ERROR"));
  };

  const [isOpenAddComment, setOpenAddComment] = useState(false);

  const openAddComment = () => {
    setOpenAddComment(true);
  };

  return (
    <div
      className={`position-fixed bg-white bottle-details ${animateDetails} `}
      ref={detailsRef}
    >
      <div className="px-3 pt-1 pb-3">
        <BottleHeader bottle={bottle} className={"p-3"} />
        <div className="d-flex justify-content-around my-2">
          <BottlePrice price={bottle.price} />
          <BottleSelectorNumber
            number={bottle.nb}
            updateNumber={updateNumber}
          />
        </div>
        <BottleComments
          openAddComment={openAddComment}
          comments={bottle.comments}
        />

        <BottlePictures pictures={bottle.pictures} addPicture={addPicture} />
      </div>
      {isOpenAddComment && <AddComment addComment={addComment} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(BottleDetails);
