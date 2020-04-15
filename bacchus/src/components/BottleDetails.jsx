import React from "react";
import { connect } from "react-redux";

import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";
import BottleSelectorNumber from "./BottleSelectorNumber.jsx";
import BottlePrice from "./BottlePrice.jsx";
import { bottleActions } from "../_actions";

const BottleDetails = ({ bottle }) => {
  const updateNumber = nb => {
    bottle.nb = nb;
    bottleActions.updateBottle(bottle);
  };

  return (
    <div>
      <div className="position-fixed layer"></div>
      <div className="position-fixed bg-primary-light bottle-details px-3 py-1">
        <BottleHeader bottle={bottle} className={"bottle-card-details p-3"} />
        <BottleComments />
        <div className="d-flex">
          <BottlePrice price={bottle.price} />
          <BottleSelectorNumber
            number={bottle.nb}
            updateNumber={updateNumber}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(BottleDetails);
