import React, { useState } from "react";
import { connect } from "react-redux";

import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";
import BottleSelectorNumber from "./BottleSelectorNumber.jsx";
import BottlePrice from "./BottlePrice.jsx";
import BottlePictures from "./BottlePictures.jsx";
import AddComment from "./AddComment.jsx";

import SvgFavorite from "./SvgFavorite.jsx";
import { bottleActions } from "../_actions";

const BottleDetails = ({ bottle, detailsRef }) => {
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
    bottleActions.updateBottle(bottle);
  };

  const [isOpenAddComment, setOpenAddComment] = useState(false);

  const openAddComment = () => {
    setOpenAddComment(true);
  };

  return (
    <div
      className="position-fixed bg-primary-light bottle-details"
      ref={detailsRef}
    >
      <div className="px-3 pt-1 pb-3">
        <div className="fav">
          <SvgFavorite />
        </div>
        <BottleHeader bottle={bottle} className={"bottle-card-details p-3"} />
        <BottleComments
          openAddComment={openAddComment}
          comments={bottle.comments}
        />
        <div className="d-flex justify-content-between">
          <BottlePrice price={bottle.price} />
          <BottleSelectorNumber
            number={bottle.nb}
            updateNumber={updateNumber}
          />
        </div>
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
