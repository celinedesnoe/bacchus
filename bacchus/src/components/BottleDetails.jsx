import React, { useState } from "react";
import { connect } from "react-redux";

import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";
import BottleSelectorNumber from "./BottleSelectorNumber.jsx";
import BottlePrice from "./BottlePrice.jsx";
import AddComment from "./AddComment.jsx";

import SvgFavorite from "./SvgFavorite.jsx";
import { bottleActions } from "../_actions";

const BottleDetails = ({ bottle }) => {
  const updateNumber = (nb) => {
    bottle.nb = nb;
    bottleActions.updateBottle(bottle);
  };
  const [isOpenAddComment, setOpenAddComment] = useState(false);

  const openAddComment = () => {
    setOpenAddComment(true);
  };

  return (
    <div>
      <div className="position-fixed layer"></div>

      <div className="position-fixed bg-primary-light bottle-details">
        <div className="px-3 pt-1 pb-3">
          <div className="fav">
            <SvgFavorite />
          </div>
          <BottleHeader bottle={bottle} className={"bottle-card-details p-3"} />
          <BottleComments openAddComment={openAddComment} />
          <div className="d-flex justify-content-between">
            <BottlePrice price={bottle.price} />
            <BottleSelectorNumber
              number={bottle.nb}
              updateNumber={updateNumber}
            />
          </div>
        </div>
        {isOpenAddComment && <AddComment />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(BottleDetails);
